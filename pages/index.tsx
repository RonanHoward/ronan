import type { NextPage } from 'next'
// Styles
import styles from '../styles/Home.module.scss'
// Comps
import { BackgroundCenterContainer, BackgroundContainer, BackgroundContentContainer } from '../components/BackgroundContainer'
import { MetaTags } from '../components/MetaTags'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Spacer } from '../components/Spacer'
import { Footer } from '../components/Footer'
import { Container } from '@mui/material'

const Home: NextPage = () => {
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
                </BackgroundContainer>

                <BackgroundContainer
                    background='/background2.jpg'
                >
                    <BackgroundContentContainer>
                        <Container maxWidth='md'>
                            <h1>My name is Ronan Howard</h1>
                            <p>
                                Welcome to my website. I am currently a high school senior, mathematician, and computer software engineer. With this website, I hope to provide a platform to allow easy access to my open source projects, custom services, music and art (as shown above). Feel free to explore my website with the navigation bar at the top of the page.
                            </p>
                        </Container>
                    </BackgroundContentContainer>
                    <Spacer height="200px"/>
                    <Footer />
                </BackgroundContainer>
            </div>
        </main>
    )
}

export default Home
