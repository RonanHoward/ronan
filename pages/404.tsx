import { NextPage } from "next"
// Comps
import { BackgroundContainer, BackgroundContentContainer } from "../components/BackgroundContainer"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { MetaTags } from "../components/MetaTags"
import { Navbar } from "../components/Navbar"
import { Spacer } from "../components/Spacer"

const Error404: NextPage = ({ }) => {
    return (
        <main>
            <MetaTags
                title='Page Not Found'
            />
            
            <BackgroundContainer background='/background2.jpg'>
                <Header />
                <Navbar />

                <Spacer height='150px' />
            </BackgroundContainer>

            <BackgroundContainer
                background='/background1.jpg'
                invertMouseEffect
            >
                <BackgroundContentContainer>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.5em',
                            position: 'relative',
                            justifyContent: 'center'
                        }}
                    >
                        <span>Error 404</span>
                        <div style={{
                            height: '1.7em',
                            width: '1px',
                            margin: '0 20px',
                            background: '#777'
                        }}/>
                        <span>Page Not Found</span>
                    </div>
                    <p>Sorry! The page you are looking for is unavailable...</p>
                    <div style={{
                        width:'100%',
                        height:'125px',
                        background: `url('/domkeykong.png') no-repeat center`,
                        backgroundSize: 'contain'
                    }}>
                    </div>
                </BackgroundContentContainer>

                <Spacer height='300px' />

                <Footer />
            </BackgroundContainer>
        </main>
    )
}

export default Error404
