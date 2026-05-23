import React from 'react'
import styled from 'styled-components'
import { motion } from 'motion/react'

import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;

display: flex;

background:
linear-gradient(
to right,
${props => props.theme.body} 50%,
${props => props.theme.text} 50%
) bottom,

linear-gradient(
to right,
${props => props.theme.body} 50%,
${props => props.theme.text} 50%
) top;

background-repeat: no-repeat;
background-size: 100% 2px;

border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};

z-index: 1;

overflow: visible;

@media (max-width: 768px){

    width: 90vw;
    height: auto;

    min-height: 75vh;

    flex-direction: column;

    top: 52%;

    padding: 1rem 0;

    border-left: 2px solid ${props => props.theme.text};

    background:
    linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%
    ) left,

    linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%
    ) right;

    background-repeat:no-repeat;
    background-size:2px 100%;
}
`

const SubBox = styled.div`
width: 50%;
position: relative;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){

    width:100%;
}
`

const ImageContainer = styled.div`
position: absolute;

bottom: -2.5rem;
left: -8%;

width: 100%;
height: 118%;

display: flex;
justify-content: center;
align-items: flex-end;

overflow: visible;

@media (max-width: 768px){

    position: relative;

    left: 0;
    bottom: 0;

    height: auto;
    width: 100%;

    margin-top: 1rem;
}
`

const ProfileImage = styled.img`
height: 115%;
width: auto;

object-fit: contain;
object-position: bottom;

filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.25));

@media (max-width: 768px){

    width: 80%;
    height: auto;

    max-height: 320px;

    object-fit: contain;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);

color: ${props => props.theme.body};

padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;

z-index: 2;

& > h1{
    font-size: calc(2rem + 2vw);
    margin-bottom: 0.5rem;
}

& > h3{
    font-size: calc(1rem + 1.2vw);
    margin-bottom: 1rem;
}

& > h6{
    color: ${props => `rgba(${props.theme.bodyRgba},0.75)`};
    font-size: calc(0.6rem + 0.8vw);
    font-weight: 300;
    line-height: 1.5;
    width: 90%;
}

@media (max-width: 768px){

    padding: 1.5rem;

    align-items: center;

    text-align: center;

    & > h1{
        font-size: 2rem;
    }

    & > h3{
        font-size: 1.2rem;
    }

    & > h6{
        width: 100%;
        font-size: 0.9rem;
        line-height: 1.7;
    }
}
`

const Intro = () => {

    return (

        <Box
            initial={{ height: 0 }}
            animate={{ height: window.innerWidth <= 768 ? '75vh' : '55vh' }}
            transition={{
                type: 'spring',
                duration: 2,
                delay: 1
            }}
        >

            <SubBox>

                <Text>

                    <h1>Hi,</h1>

                    <h3>I'm Prem.N.Chalase</h3>

                    <h6>
                        I help brands grow through creative
                        marketing and digital strategy.
                    </h6>

                </Text>

            </SubBox>

            <SubBox>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 2
                    }}
                >

                    <ImageContainer>

                        <ProfileImage
                            src={Me}
                            alt="Prem Chalase"
                        />

                    </ImageContainer>

                </motion.div>

            </SubBox>

        </Box>
    )
}

export default Intro