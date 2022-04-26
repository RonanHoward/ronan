import { Container, TextField } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { BackgroundContainer, BackgroundContentContainer } from "../components/BackgroundContainer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MetaTags } from "../components/MetaTags";
import { Navbar } from "../components/Navbar";
import { Spacer } from "../components/Spacer";
import { sendContactMessage, str } from "../lib/functions";

const Contact: NextPage = ({ }) => {
    // form states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <main>
            <MetaTags
                title='Ronan Howard | Contact'
            />

            <BackgroundContainer background='/background2.jpg'>
                <Header />
                <Navbar />

                <Spacer height='210px' />
            </BackgroundContainer>
            <BackgroundContainer
                background='/background1.jpg'
                invertMouseEffect
            >
                <BackgroundContentContainer>
                    <h1>Write a message for me</h1>
                    <p style={{fontSize:'0.9em',color:'#666666'}}>
                        Most custom websites are currently on hold, but don{"'"}t be afraid to contact me for when they open up again shortly!
                    </p>
                    <Container style={{
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        position:'relative',
                        marginTop:'1em'
                    }}>
                        <TextField
                            sx={{width:'50%',margin:'0 25% 1em 25%'}}
                            value={name}
                            label="Name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <TextField
                            sx={{width:'50%',margin:'0 25% 1em 25%'}}
                            value={email}
                            label="Email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <TextField
                            sx={{width:'50%',margin:'0 25% 1em 25%'}}
                            value={message}
                            multiline
                            rows={4}
                            label="Message"
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                        />
                        <div className='centerFlex'>
                            <button
                                className='green'
                                onClick={() => {
                                    sendContactMessage(str(name), str(email), str(message))
                                }}
                            >Submit</button>
                            <Spacer width='5px' />
                            <button
                                className='red'
                                onClick={() => {
                                    setName('')
                                    setEmail('')
                                    setMessage('')
                                }}
                            >Clear</button>
                        </div>
                    </Container>
                </BackgroundContentContainer>

                <Spacer height='200px' />

                <Footer />
            </BackgroundContainer>
        </main>
    )
}

export default Contact
