import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
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
0% {
    transform: translateY(-10px);
}

50% {
    transform: translateY(15px) translateX(15px);
}

100% {
    transform: translateY(-10px);
}
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

            <PowerButton />

            <ParticleComponent theme='dark' />

            <Spaceman>
                <img src={astronaut} alt="spaceman" />
            </Spaceman>

            <Main>

                I'm Prem Chalase, a BCA graduate and Digital Marketing enthusiast passionate about helping businesses grow through SEO, content strategy, lead generation, and data-driven marketing.

                <br /><br />

                During my internship at Corenest Tech LLP (Writebing), I worked on social media marketing, audience engagement, content planning, local SEO, lead generation, and performance analysis across LinkedIn, Instagram, Facebook, Quora, Reddit, and YouTube.

                <br /><br />

                I have hands-on experience with Google Analytics 4, Microsoft Clarity, Google Search Console, Brevo, Canva, and SEO tools. I enjoy analyzing user behavior, optimizing digital campaigns, and improving online visibility through strategic marketing initiatives.

                <br /><br />

                Alongside my internship experience, I built and marketed my own project, Prem's Pencil Sketches, where I implemented SEO, email marketing automation, conversion-focused landing pages, and behavioral analytics to attract and convert potential customers.

                <br /><br />

                I am continuously learning and expanding my expertise in Digital Marketing, SEO, Analytics, Growth Marketing, and Lead Generation while building practical projects that deliver measurable results.

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