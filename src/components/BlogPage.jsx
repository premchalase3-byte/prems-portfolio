import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"

import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'

import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"

import { motion } from 'motion/react'

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

min-height: 100vh;

overflow-x: hidden;

@media (max-width: 768px){
    background-attachment: scroll;
}
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.90)`};

width: 100%;
min-height: 100vh;

position: relative;

padding-bottom: 6rem;

overflow-x: hidden;
`

const HeroSection = styled.div`
width: 100%;

padding-top: 8rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: center;

@media (max-width: 768px){

    padding-top: 6rem;

    padding-left: 1rem;
    padding-right: 1rem;
}
`

const Heading = styled.h1`
font-size: calc(2.5rem + 2vw);

font-family: 'Karla', sans-serif;
font-weight: 700;

margin-bottom: 1.5rem;

color: ${props => props.theme.text};

letter-spacing: 1px;

@media (max-width: 768px){

    font-size: 2rem;

    line-height: 1.3;
}

@media (max-width: 480px){

    font-size: 1.7rem;
}
`

const SubText = styled.p`
width: 65%;

font-size: calc(0.9rem + 0.5vw);

font-family: 'Ubuntu Mono', monospace;

line-height: 2;

color: ${props => props.theme.text};

opacity: 0.9;

@media (max-width: 768px){

    width: 95%;

    font-size: 0.95rem;

    line-height: 1.8;
}

@media (max-width: 480px){

    font-size: 0.85rem;
}
`

const StatsSection = styled.div`
margin-top: 3rem;

display: flex;
justify-content: center;
align-items: center;
gap: 1.5rem;

flex-wrap: wrap;

padding: 0 1rem;

@media (max-width: 768px){

    gap: 1rem;

    margin-top: 2rem;
}
`

const StatBox = styled.div`
padding: 1rem 2rem;

border: 2px solid ${props => props.theme.text};

font-family: 'Ubuntu Mono', monospace;

font-size: 1rem;

backdrop-filter: blur(5px);

transition: 0.3s ease;

border-radius: 10px;

background: rgba(255,255,255,0.05);

&:hover{
    transform: translateY(-5px);
}

@media (max-width: 768px){

    width: 90%;

    font-size: 0.9rem;

    padding: 0.9rem 1rem;
}

@media (max-width: 480px){

    font-size: 0.8rem;
}
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;

padding-top: 5rem;

padding-left: 1rem;
padding-right: 1rem;

@media (max-width: 768px){

    padding-top: 3rem;
}
`

const Grid = styled.div`
display: grid;

grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));

grid-gap: calc(1rem + 2vw);

@media (max-width: 900px){

    grid-template-columns: 1fr;

    width: 100%;
}

@media (max-width: 480px){

    grid-gap: 1.5rem;
}
`

// Framer Motion Config
const container = {
    hidden: {
        opacity: 0
    },

    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.25,
            duration: 0.5,
        }
    }
}

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {

        let num = (window.innerHeight - 70) / 30;

        setNumbers(parseInt(num));

    }, [])

    return (

        <MainContainer

            variants={container}

            initial='hidden'

            animate='show'

            exit={{
                opacity: 0,
                transition: {
                    duration: 0.5
                }
            }}
        >

            <Container>

                {/* REMOVED SOCIAL ICONS */}

                <LogoComponent />

                <PowerButton />

                <AnchorComponent number={numbers} />

                <HeroSection>

                    <Heading>
                        Marketing Insights & Growth Strategies
                    </Heading>

                    <SubText>

                        Exploring digital branding, audience engagement,
                        content marketing, SEO strategies, AI-powered workflows,
                        social media campaigns, and modern growth-focused
                        marketing techniques designed to create impactful
                        digital experiences.

                    </SubText>

                    <StatsSection>

                        <StatBox>
                            8+ Marketing Projects
                        </StatBox>

                        <StatBox>
                            Multi-Platform Campaigns
                        </StatBox>

                        <StatBox>
                            SEO & Content Strategy
                        </StatBox>

                        <StatBox>
                            AI-Powered Marketing
                        </StatBox>

                    </StatsSection>

                </HeroSection>

                <Center>

                    <Grid>

                        {
                            Blogs.map(blog => {
                                return (
                                    <BlogComponent
                                        key={blog.id}
                                        blog={blog}
                                    />
                                )
                            })
                        }

                    </Grid>

                </Center>

                <BigTitle
                    text="INSIGHTS"
                    top="5rem"
                    left="5rem"
                />

            </Container>

        </MainContainer>
    )
}

export default BlogPage