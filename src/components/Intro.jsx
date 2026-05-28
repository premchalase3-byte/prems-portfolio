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
height:55vh;

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

z-index:1;

overflow: hidden;

@media (max-width: 768px){

    width: 90vw;
    height: 70vh;

    top: 55%;
}
`

const SubBox = styled.div`
width: 50%;
height: 100%;

position: relative;

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`

const Text = styled.div`
width: 100%;

padding: 2rem 2rem 2rem 3rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

color: ${props => props.theme.body};

z-index: 2;

text-align: left;

h1{
    font-size: 4rem;
    margin-bottom: 1rem;
}

h3{
    font-size: 2rem;
    margin-bottom: 1rem;

    width: 100%;
}

h6{
    font-size: 1rem;
    line-height: 1.8;

    color: ${props => `rgba(${props.theme.bodyRgba},0.75)`};

    width: 85%;
}

@media (max-width: 768px){

    padding: 2rem 1rem 2rem 2rem;

    justify-content: flex-start;
    align-items: flex-start;

    h1{
        font-size: 3rem;
    }

    h3{
        font-size: 1.6rem;
    }

    h6{
        font-size: 0.95rem;
        width: 95%;
        line-height: 1.7;
    }
}
`

const ImageWrapper = styled.div`
width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: flex-end;

position: relative;

@media (max-width: 768px){

    justify-content: flex-end;
    align-items: flex-end;
}
`

const ProfileImage = styled.img`
height: 115%;
width: auto;

object-fit: contain;

object-position: bottom center;

filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.25));

@media (max-width: 768px){

    height: 78%;

    position: absolute;
    bottom: 0;
    right: 8%;

    object-position: bottom right;
}
`

const Intro = () => {

    return (

        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{
            type: 'spring',
            duration:2,
            delay:1
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
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{
                    duration:1,
                    delay:2
                }}
                style={{
                    width:'100%',
                    height:'100%'
                }}
                >

                    <ImageWrapper>

                        <ProfileImage
                            src={Me}
                            alt="Profile Pic"
                        />

                    </ImageWrapper>

                </motion.div>

            </SubBox>

        </Box>
    )
}

export default Intro