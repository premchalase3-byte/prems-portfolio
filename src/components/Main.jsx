import { motion } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'

import { YinYang } from './AllSvgs'
import Intro from './Intro'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled(motion.div)`
padding: 2rem;
width:100%;
height:100%;
`

/* CONTACT BUTTON */

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

/* CERTIFICATION BUTTON */

const CERTIFICATIONS = styled(NavLink)`
color: ${props => props.theme.text};

position: absolute;
top: 4rem;
right: 2rem;

text-decoration: none;
z-index:1;
`

/* RESUME BUTTON */

const ResumeButton = styled.a`
position: absolute;

bottom: 3rem;
right: 2rem;

padding: 0.8rem 1.5rem;

border: 2px solid ${props => props.theme.text};

color: ${props => props.theme.text};

text-decoration: none;

font-family:'Karla', sans-serif;
font-weight:500;

transition:0.3s ease;

z-index:2;

&:hover{
    background:${props => props.theme.text};
    color:${props => props.theme.body};
}
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.$click ? '85%' :'50%'};
left: ${props => props.$click ? '92%' :'50%'};

transform: translate(-50%,-50%);

border: none;
outline: none;
background-color: transparent;

cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

transition: all 1s ease;

z-index:2;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.$click ? 'none' :'inline-block'};
    padding-top: 1rem;

    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.$click ? '50%' : '0%'};
height: ${props => props.$click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const pageTransition = {
    initial:{
        opacity:0,
        y:40
    },

    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.8,
            ease:"easeInOut"
        }
    },

    exit:{
        opacity:0,
        y:-40,
        transition:{
            duration:0.5
        }
    }
}

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>

         <DarkDiv $click={click}/>

            <Container
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            >

            <PowerButton />

            <LogoComponent theme={click ? 'dark' :'light'}/>

            {/* SPINNING CENTER BUTTON */}

            <Center $click={click}>

                <motion.div
                whileHover={{
                    scale:1.1
                }}

                whileTap={{
                    scale:0.9
                }}
                >

                <YinYang
                    onClick={()=> handleClick()}
                    width={click ? 80 : 160}
                    height={click ? 80 : 160}
                    fill='currentColor'
                />

                </motion.div>

                <span>click to enter PREM'S portfolio</span>

            </Center>

            {/* SAY HI BUTTON */}

            <Contact to="/contact">

                <motion.h2
                initial={{
                    y:-200,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity:1,
                    transition: {
                        type:'spring',
                        duration: 1.5,
                        delay:1
                    }
                }}
                whileHover={{
                    scale: 1.1,
                    x:5
                }}
                whileTap={{scale: 0.9}}
                >

                Say hi

                </motion.h2>

            </Contact>

            {/* CERTIFICATIONS BUTTON */}

            <CERTIFICATIONS to="/certifications">

                <motion.h2
                initial={{
                    y:-200,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity:1,
                    transition: {
                        type:'spring',
                        duration: 1.5,
                        delay:1
                    }
                }}
                whileHover={{
                    scale: 1.1,
                    x:5
                }}
                whileTap={{scale: 0.9}}
                >

                    My Certificates

                </motion.h2>

            </CERTIFICATIONS>

            {/* BLOG BUTTON */}

            <BLOG to="/blog">

                <motion.h2
                initial={{
                    y:-200,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity:1,
                    transition: {
                        type:'spring',
                        duration: 1.5,
                        delay:1
                    }
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{scale: 0.9}}
                >

                    Blog

                </motion.h2>

            </BLOG>

            {/* WORK BUTTON */}

            <WORK to="/work" $click={click}>

                <motion.h2
                initial={{
                    y:-200,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity:1,
                    transition: {
                        type:'spring',
                        duration: 1.5,
                        delay:1
                    }
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{scale: 0.9}}
                >

                    Work

                </motion.h2>

            </WORK>

            {/* RESUME BUTTON HIDDEN AFTER CLICK */}

            {!click && (

            <motion.div
            initial={{
                opacity:0,
                x:100
            }}

            animate={{
                opacity:1,
                x:0,
                transition:{
                    duration:1,
                    delay:1.5
                }
            }}
            >

            <ResumeButton
            href="https://drive.google.com/file/d/1RdEKoEEuB85TRbJtC_inHiRGD8RCScMM/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            >

                View Resume

            </ResumeButton>

            </motion.div>

            )}

            <BottomBar>

            <ABOUT to="/about" $click={click}>

                <motion.h2
                initial={{
                    y:200,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity:1,
                    transition: {
                        type:'spring',
                        duration: 1.5,
                        delay:1
                    }
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{scale: 0.9}}
                >

                    About.

                </motion.h2>

            </ABOUT>

            <SKILLS to="/skills">

                <motion.h2
                initial={{
                    y:200,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity:1,
                    transition: {
                        type:'spring',
                        duration: 1.5,
                        delay:1
                    }
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{scale: 0.9}}
                >

                    My Skills.

                </motion.h2>

            </SKILLS>

            </BottomBar>

            </Container>

            {click ? <Intro click={click} /> : null }

        </MainContainer>
    )
}

export default Main