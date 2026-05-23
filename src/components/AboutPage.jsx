import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${(props) => props.theme.body};

width: 100vw;
min-height: 100vh;

position: relative;

overflow-x: hidden;
overflow-y: auto;

padding-bottom: 4rem;

@media (max-width: 768px){
    padding-bottom: 8rem;
}
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
position: absolute;

top: 8%;
right: 5%;

width: 20vw;

animation: ${float} 4s ease infinite;

z-index:2;

img{
    width: 100%;
    height: auto;
}

@media (max-width: 1024px){
    width: 28vw;
}

@media (max-width: 768px){

    width: 35vw;

    top: 5%;
    right: 5%;

    opacity: 0.8;
}
`

const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};

color: ${(props) => props.theme.text};

padding: 3rem;

width: 58vw;

z-index: 3;

line-height: 2;

display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

font-size: calc(0.75rem + 0.5vw);

font-family: 'Karla', sans-serif;

font-weight: 400;

backdrop-filter: blur(10px);

background: rgba(255,255,255,0.08);

position: absolute;

left: 6%;
top: 14%;

border-radius: 20px;

box-shadow: 0 10px 35px rgba(0,0,0,0.3);

transition: all 0.3s ease;

overflow-wrap: break-word;

&:hover{
    transform: translateY(-5px);
    background: rgba(255,255,255,0.12);
}

@media (max-width: 1024px){

    width: 70vw;

    top: 16%;
}

@media (max-width: 768px){

    position: relative;

    width: 88vw;

    left: 50%;
    top: 12rem;

    transform: translateX(-50%);

    padding: 2rem 1.5rem;

    font-size: 0.95rem;

    line-height: 1.9;

    margin-bottom: 4rem;

    min-height: auto;

    &:hover{
        transform: translateX(-50%);
    }
}

@media (max-width: 480px){

    width: 90vw;

    padding: 1.5rem;

    font-size: 0.88rem;

    line-height: 1.8;
}
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>

            <Box>

                <LogoComponent theme='dark' />

                <SocialIcons theme='dark' />

                <PowerButton />

                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>

                <Main>

                    I'm Prem Chalase, an HR and Digital Marketing enthusiast pursuing BCA in India, passionate about building impactful online brands, audience engagement, and professional communication.

                    <br /><br />

                    I specialize in Social Media Marketing, Recruitment Support, Branding, Content Strategy, and Audience Engagement across LinkedIn, Instagram, Facebook, Quora, Reddit, and YouTube.

                    <br /><br />

                    During my internships at Corenest Tech LLP, Writebing, and LernX, I worked on recruitment outreach, multi-platform marketing campaigns, content creation, LinkedIn engagement, branding strategies, and communication-focused activities.

                    <br /><br />

                    I enjoy building creative campaigns, experimenting with branding ideas, and helping businesses grow through strategy, engagement, and consistency.

                    <br /><br />

                    My goal is to continuously learn, improve my communication and management skills, and grow as a professional in HR, branding, and digital marketing.

                </Main>

                <BigTitle
                    text="ABOUT"
                    top="10%"
                    left="5%"
                />

            </Box>

        </ThemeProvider>
    )
}

export default AboutPage