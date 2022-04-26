import type { NextPage } from 'next'
import toast from 'react-hot-toast'
// Style
import s from '../styles/Admin.module.scss'
// Firebase
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth, db } from '../lib/firebaseConfig'
// Hooks
import { useRouter } from 'next/router'
import { useCollection } from 'react-firebase-hooks/firestore'
// Comps
import { MetaTags } from '../components/MetaTags'
import { BackgroundContainer, BackgroundContentContainer } from '../components/BackgroundContainer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Spacer } from '../components/Spacer'
import { Footer } from '../components/Footer'
import { collection } from 'firebase/firestore'
import { Loader } from '../components/Loader'
import { Container } from '@mui/material'

const GoogleSignInButton = () => {
    const router = useRouter()
    const provider = new GoogleAuthProvider()
    return (
        <button
            className='gray'
            onClick={async () => {
                await signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential?.accessToken;
                        const user = result.user;
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.email;
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        toast.error('An error occured while trying to validate your email')
                        router.push('/')
                    });
            }}
            style={{marginTop:'3em'}}
        >Authorize With Google</button>
    )
}

const Admin: NextPage = ({ }) => {
    const router = useRouter()

    const user = auth.currentUser

    // non-admin user will be denied access to database
    const [msgs, loading, error] = useCollection(
        collection(db, 'contactMessages')
    )

    return (
        <main>
            <MetaTags
                title='Ronan Howard | Admin Page'
            />

            <BackgroundContainer background='/background2.jpg'>
                <Header />
                <Navbar />

                <Spacer height='210px' />
            </BackgroundContainer>

            <BackgroundContainer
                background='/background0.jpg'
                invertMouseEffect
            >
                <BackgroundContentContainer>
                    <h1 style={{marginBottom:'1em'}}>Admin Portal</h1>
                    {
                        // if user logged in
                        user ? loading ? <Loader /> :
                        // if user has access to read data
                        msgs ? <Container maxWidth='md'>
                            <h2>Contact Messages</h2>

                            {msgs.docs.map(
                                (apt, index) => {
                                    const data = apt.data()
                                    return <div key={`apt${index}`} className={s.aptContainer}>
                                        <div>
                                            <span>Name:</span>
                                            <span>Email:</span>
                                            <span>UID:</span>
                                            <span>Message:</span>
                                        </div>
                                        <div>
                                            <span>{data['name']}</span>
                                            <span>{data['email']}</span>
                                            <span>{data['uid'] || 'N/A'}</span>
                                            <span>{data['message']}</span>
                                        </div>
                                    </div>
                                }
                            )}

                            <button
                                className='red'
                                style={{marginTop:'2em'}}
                                onClick={() => {
                                    signOut(auth)
                                        .then(()=>{
                                            toast.success('User Signed Out')
                                            router.push('/')
                                        })
                                        .catch(()=>{toast.error('Failed to Sign User Out')})
                                }}
                            >Sign Out Of Admin Account</button>
                        </Container>
                        // if user is not an admin
                        : <>
                            <p>You Don{"'"}t Have Access To This Page</p>
                            <button
                                className='red'
                                style={{marginTop:'2em'}}
                                onClick={() => {
                                    signOut(auth)
                                        .then(()=>{
                                            toast.success('User Signed Out')
                                            router.push('/')
                                        })
                                        .catch(()=>{toast.error('Failed to Sign User Out')})
                                }}
                            >Sign Out</button>
                        </>
                        // if user not logged in
                        : <GoogleSignInButton />
                    }
                </BackgroundContentContainer>

                <Spacer height='200px' />

                <Footer />
            </BackgroundContainer>
        </main>
    )
}

export default Admin
