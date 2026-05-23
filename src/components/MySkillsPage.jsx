import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};

width: 100vw;
min-height: 100vh;

position: relative;

display: flex;
justify-content: center;
align-items: center;
gap: 3rem;

padding: 4rem;

overflow-x: hidden;
overflow-y: auto;

/* Background Glow Effects */

&::before{
    content: '';

    position: absolute;

    width: 400px;
    height: 400px;

    border-radius: 50%;

    background: rgba(0,0,0,0.06);

    top: 10%;
    left: 5%;

    filter: blur(120px);

    z-index: 0;
}

&::after{
    content: '';

    position: absolute;

    width: 350px;
    height: 350px;

    border-radius: 50%;

    background: rgba(0,0,0,0.05);

    bottom: 5%;
    right: 5%;

    filter: blur(100px);

    z-index: 0;
}

@media (max-width: 900px){

    flex-direction: column;

    align-items: center;

    gap: 2rem;

    padding: 8rem 1rem 4rem 1rem;
}
`

const Main = styled.div`
border: 1.5px solid rgba(0,0,0,0.2);

/* GLASS EFFECT */

background: rgba(255,255,255,0.12);

backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

box-shadow: 0 8px 32px rgba(0,0,0,0.08);

color: ${props => props.theme.text};

padding: 2.5rem;

width: 32rem;
min-height: 40rem;

border-radius: 20px;

z-index: 3;

line-height: 1.7;

cursor: pointer;

font-family: 'Ubuntu Mono', monospace;

display: flex;
flex-direction: column;
justify-content: flex-start;

transition: all 0.35s ease;

overflow-wrap: break-word;

&:hover{
    color: white;

    background: rgba(0,0,0,0.88);

    transform: translateY(-12px) scale(1.02);

    border: 1px solid rgba(255,255,255,0.2);
}

@media (max-width: 1024px){

    width: 42vw;
}

@media (max-width: 900px){

    width: 90vw;

    min-height: auto;

    padding: 2rem;
}

@media (max-width: 480px){

    width: 92vw;

    padding: 1.5rem;

    border-radius: 16px;
}
`

const Title = styled.h2`
display: flex;
justify-content: flex-start;
align-items: center;

font-size: calc(1rem + 1vw);

margin-bottom: 1.8rem;

font-family: 'Karla', sans-serif;

${Main}:hover &{
    & > *{
        fill: white;
    }
}

& > *:first-child{
    margin-right: 1rem;
}

@media (max-width: 768px){

    font-size: 1.3rem;

    margin-bottom: 1.2rem;

    svg{
        width: 32px;
        height: 32px;
    }
}
`

const Description = styled.div`
color: ${props => props.theme.text};

font-size: calc(0.7rem + 0.4vw);

padding: 0.8rem 0;

transition: 0.3s ease;

${Main}:hover &{
    color: rgba(255,255,255,0.92);
}

strong{
    display: inline-block;

    margin-bottom: 1rem;

    text-transform: uppercase;

    font-size: 1rem;

    letter-spacing: 1px;
}

ul{
    margin-left: 1.2rem;

    line-height: 2;
}

li{
    transition: 0.3s ease;
}

${Main}:hover li{
    transform: translateX(5px);
}

p{
    line-height: 1.9;
}

@media (max-width: 768px){

    font-size: 0.95rem;

    line-height: 1.8;

    strong{
        font-size: 0.95rem;
    }

    ul{
        line-height: 1.8;
    }

    p{
        line-height: 1.8;
    }
}

@media (max-width: 480px){

    font-size: 0.88rem;
}
`

const MySkillsPage = () => {

    return (

        <ThemeProvider theme={lightTheme}>

            <Box>

                <LogoComponent theme='light'/>

                <SocialIcons theme='light'/>

                <PowerButton />

                <ParticleComponent theme='light' />

                {/* LEFT CARD */}

                <Main>

                    <Title>
                        <Design width={40} height={40} />
                        Digital Marketing
                    </Title>

                    <Description>
                        I create impactful digital experiences through strategic marketing,
                        branding, and audience engagement while keeping campaigns modern,
                        clean, and growth-focused.
                    </Description>

                    <Description>

                        <strong>I LIKE TO WORK ON</strong>

                        <ul>
                            <li>Social Media Marketing</li>
                            <li>Content Strategy</li>
                            <li>Lead Generation</li>
                            <li>SEO & Branding</li>
                            <li>Audience Engagement</li>
                            <li>Digital Campaigns</li>
                        </ul>

                    </Description>

                    <Description>

                        <strong>TOOLS</strong>

                        <ul>
                            <li>Canva</li>
                            <li>Google Analytics</li>
                            <li>Meta Business Suite</li>
                            <li>Google Search Console</li>
                        </ul>

                    </Description>

                </Main>

                {/* RIGHT CARD */}

                <Main>

                    <Title>
                        <Develope width={40} height={40} />
                        Growth & Strategy
                    </Title>

                    <Description>
                        I enjoy helping brands grow through creative campaigns,
                        audience-focused strategies, and performance-driven
                        digital marketing.
                    </Description>

                    <Description>

                        <strong>SKILLS</strong>

                        <p>
                            Social Media Marketing, Content Marketing,
                            LinkedIn Marketing, Instagram Growth,
                            SEO Optimization, Business Listings,
                            Audience Growth, Community Engagement,
                            Branding & AI-powered Marketing.
                        </p>

                    </Description>

                    <Description>

                        <strong>PLATFORMS</strong>

                        <p>
                            LinkedIn, Instagram, Facebook,
                            Reddit, Quora, YouTube,
                            Canva, GitHub &
                            Google Workspace.
                        </p>

                    </Description>

                </Main>

                {/* BIG BACKGROUND TEXT */}

                <BigTitle
                    text="SKILLS"
                    top="78%"
                    right="8%"
                />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage