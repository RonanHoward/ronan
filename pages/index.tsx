import type { NextPage } from 'next'
// Styles
import s from '../styles/Home.module.scss'
// Hooks
import { useEffect, useState } from 'react'
// Comps
import { BackgroundCenterContainer, BackgroundContainer, BackgroundContentContainer } from '../components/BackgroundContainer'
import { MetaTags } from '../components/MetaTags'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Spacer } from '../components/Spacer'
import { Footer } from '../components/Footer'
import { Avatar, Container } from '@mui/material'
import Link from 'next/link'
import ReactTextTransition from 'react-text-transition'

const Home: NextPage = () => {

    // cycling text
    const [adjective, setAdjective] = useState({i:-1,adjectives:['Beautiful','Fast','Secure','Interactive']})
    useEffect(() => {
        const intervalId = setTimeout(() => {
            if (adjective.i > adjective.adjectives.length - 2) {
                setAdjective({i:0,adjectives:adjective.adjectives})
            } else {
                setAdjective({i:adjective.i + 1,adjectives:adjective.adjectives})
            }
            return () => clearInterval(intervalId)
        }, 900)
    }, [adjective])

    return (
        <main>
            <MetaTags
                title='Ronan Howard'
            />

            <div>
                <BackgroundContainer
                    height='100vh'
                    background='/background0.jpg'
                >
                    <Header />
                    <Navbar />
                    <BackgroundCenterContainer includeContentContainer>
                        <h2>Welcome to my Website</h2>
                    </BackgroundCenterContainer>

                    <div className={s.scrollAnimation}>
                        <div className={s.chevron}></div>
                        <div className={s.chevron}></div>
                        <div className={s.chevron}></div>
                    </div>
                </BackgroundContainer>

                <BackgroundContainer
                    background='/background2.jpg'
                    invertMouseEffect
                >
                    <BackgroundContentContainer>
                        <h1 className={s.title}>My name is Ronan Howard</h1>
                        <Container maxWidth='md'>
                            <div className='centerFlex' style={{position:'relative',marginTop:'10px'}}>
                                <Link href='https://github.com/RonanHoward' passHref>
                                    <Avatar
                                        src='/GitHub-Mark.png'
                                        alt='Ronan Howard'
                                        sx={{width:'auto',height:'5em',marginTop:'2.5em',marginRight:'21px',cursor:'pointer'}}
                                        className={s.avatar}
                                    />
                                </Link>
                                <Avatar
                                    src='/me.jpg'
                                    alt='Ronan Howard'
                                    sx={{width:'auto',height:'10em'}}
                                    className={s.avatar}
                                />
                                <Link href='https://www.linkedin.com/in/ronan-howard-07aa40238/' passHref>
                                    <Avatar
                                        src='/LinkedIn_icon_circle.svg'
                                        alt='Ronan Howard'
                                        sx={{width:'auto',height:'5em',marginTop:'2.5em',marginLeft:'21px',cursor:'pointer'}}
                                        className={s.avatar}
                                    />
                                </Link>
                            </div>
                            <p style={{fontSize:'1.2em'}}>
                                Freelance Website Developer
                            </p>
                            <p>
                                I{"'"}ve dedicated my whole life to the computer sciences. I started programming in the second grade and started developing websites in the fourth grade. After years of working with javascript web development, I{"'"}ve not only become an optimized web developer, but I{"'"}ve become a skilled artist.
                            </p>
                        </Container>
                        <p style={{fontSize:'2em'}}>
                            Get your own {adjective.i !== -1 && <ReactTextTransition style={{margin: "0 4px"}} inline>{adjective.adjectives[adjective.i]}</ReactTextTransition>} Website
                        </p>
                    </BackgroundContentContainer>
                    <Spacer height="200px"/>
                    <Footer />
                </BackgroundContainer>
            </div>
        </main>
    )
}

export default Home
