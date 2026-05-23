import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'

import { YinYang } from './AllSvgs'
import Intro from './Intro'

/* ---------------- LOADER ---------------- */

const Loader = styled.div`
position: fixed;
top: 0;
left: 0;

width: 100%;
height: 100%;

background: #000;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

z-index: 9999;

color: white;

font-family: 'Karla', sans-serif;

h1{
    margin-top: 2rem;
    letter-spacing: 4px;
    font-size: 2rem;
}

@media (max-width: 768px){
    h1{
        font-size: 1.2rem;
        text-align:center;
    }
}
`

/* ---------------- ANIMATIONS ---------------- */

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const blink = keyframes`
0%{opacity:0.4;}
50%{opacity:1;}
100%{opacity:0.4;}
`

const lineMove = keyframes`
0%{
    height:0%;
}
100%{
    height:100%;
}
`

/* ---------------- MAIN CONTAINER ---------------- */

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

&::before{
    content:'';

    position:absolute;

    width:450px;
    height:450px;

    background: radial-gradient(
        circle,
        rgba(0,0,0,0.06),
        transparent 70%
    );

    top:10%;
    left:10%;

    border-radius:50%;

    filter: blur(90px);

    z-index:0;
}

&::after{
    content:'';

    position:absolute;

    width:450px;
    height:450px;

    background: radial-gradient(
        circle,
        rgba(0,0,0,0.05),
        transparent 70%
    );

    bottom:5%;
    right:5%;

    border-radius:50%;

    filter: blur(90px);

    z-index:0;
}

@media (max-width: 768px){
    overflow-y:auto;

    &::before,
    &::after{
        width:250px;
        height:250px;
    }
}
`

const Divider = styled.div`
position:absolute;

left:50%;
top:0;

width:2px;
height:100%;

background: rgba(0,0,0,0.08);

z-index:0;

animation:${lineMove} 2s ease;

@media (max-width: 768px){
    display:none;
}
`

const Container = styled.div`
padding: 2rem;

@media (max-width: 768px){
    padding:1rem;
}
`

/* ---------------- NAVIGATION ---------------- */

const Contact = styled(NavLink)`
color: ${props => props.theme.text};

position: absolute;
top: 2rem;
right: calc(1rem + 2vw);

text-decoration: none;

z-index:2;

letter-spacing:1px;

@media (max-width: 768px){
    top:1rem;
    right:1rem;

    h2{
        font-size:0.9rem;
    }
}
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};

position: absolute;
top: 50%;
right: calc(1rem + 2vw);

transform: rotate(90deg) translate(-50%, -50%);

text-decoration: none;

z-index:2;

letter-spacing:1px;

@media (max-width: 768px){
    display:none;
}
`

const WORK = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);

transform: translate(-50%, -50%) rotate(-90deg);

text-decoration: none;

z-index:2;

letter-spacing:1px;

@media (max-width: 768px){
    display:none;
}
`

const Certifications = styled(NavLink)`
color: ${props => props.theme.text};

position: absolute;
top: 1rem;
right: 12%;

text-decoration: none;

z-index:2;

letter-spacing:1px;

@media (max-width: 768px){
    top:4rem;
    right:1rem;

    h2{
        font-size:0.9rem;
    }
}
`

/* ---------------- RESUME BUTTON ---------------- */

const ResumeBtn = styled.a`
position: absolute;

bottom: 6rem;
right: 4rem;

padding: 0.9rem 1.8rem;

border: 2px solid ${props => props.theme.text};

color: ${props => props.theme.text};

text-decoration: none;

font-family: 'Karla', sans-serif;
font-weight: 600;

transition: 0.3s ease;

z-index: 10;

backdrop-filter: blur(10px);

&:hover{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

    transform: translateY(-4px);
}

@media (max-width: 768px){
    bottom:7rem;
    right:50%;

    transform:translateX(50%);

    padding:0.7rem 1.2rem;

    font-size:0.8rem;
}
`

/* ---------------- BOTTOM BAR ---------------- */

const BottomBar = styled.div`
position: absolute;

bottom: 1rem;
left: 0;
right: 0;

width: 100%;

display: flex;
justify-content: space-evenly;

@media (max-width: 768px){
    bottom:1.5rem;

    h2{
        font-size:1rem;
    }
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};

text-decoration: none;

z-index:2;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};

text-decoration: none;

z-index:2;
`

/* ---------------- CENTER BUTTON ---------------- */

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

z-index: 20;

&>:first-child{
    animation: ${rotate} infinite 2s linear;

    transition:0.4s ease;
}

&>:first-child:hover{
    transform: scale(1.1);

    filter: drop-shadow(0 0 12px rgba(0,0,0,0.3));
}

&>:last-child{
    display: ${props => props.$click ? 'none' :'inline-block'};
}

.enter-text{
    padding-top: 1.2rem;

    font-family: 'Ubuntu Mono', monospace;

    font-size: 1.3rem;
    font-weight: 700;

    letter-spacing: 2px;
    text-transform: uppercase;

    animation: ${blink} 1.5s infinite;

    color: ${props => props.theme.text};

    text-align:center;
}

@media (max-width: 768px){

    top:${props => props.$click ? '88%' :'50%'};
    left:${props => props.$click ? '82%' :'50%'};

    .enter-text{
        font-size:0.8rem;
        width:90%;
        line-height:1.5;
    }
}
`

/* ---------------- DARK DIV ---------------- */

const DarkDiv = styled.div`
position: absolute;

top: 0;
background-color: #000;

bottom: 0;
right: 50%;

width: ${props => props.$click ? '50%' : '0%'};
height: ${props => props.$click ? '100%' : '0%'};

z-index:1;

transition:
height 0.5s ease,
width 1s ease 0.5s;

@media (max-width:768px){
    display:none;
}
`

/* ---------------- MAIN COMPONENT ---------------- */

const Main = () => {

    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleClick = () => setClick(!click);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);

        return () => clearTimeout(timer);

    }, []);

    if(loading){

        return(

            <Loader>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear"
                    }}
                >
                    <YinYang
                        width={120}
                        height={120}
                        fill="white"
                    />
                </motion.div>

                <h1>PREM'S PORTFOLIO</h1>

            </Loader>

        )
    }

    return (

        <MainContainer>

            <Divider />

            <DarkDiv $click={click}/>

            <Container>

                <PowerButton />

                <LogoComponent theme={click ? 'dark' :'light'}/>

                

                <Center $click={click}>

                    <YinYang
                        onClick={() => handleClick()}
                        width={click ? 90 : 150}
                        height={click ? 90 : 150}
                        fill='currentColor'
                    />

                    <span className="enter-text">
                        CLICK TO ENTER PREM'S PORTFOLIO
                    </span>

                </Center>

                <Contact to="/contact">

                    <motion.h2
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Say hi..
                    </motion.h2>

                </Contact>

                <BLOG to="/blog">

                    <motion.h2
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Insights
                    </motion.h2>

                </BLOG>

                <WORK to="/work" $click={click}>

                    <motion.h2
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Campaigns
                    </motion.h2>

                </WORK>

                <Certifications to="/certifications">

                    <motion.h2
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Certifications
                    </motion.h2>

                </Certifications>

                {!click && (

                <ResumeBtn
                    href="https://drive.google.com/file/d/1_QEKkIuF_3zLvpSNn_qXqzXtMj6wmF_a/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    View Resume

                </ResumeBtn>

                )}

                <BottomBar>

                    <ABOUT to="/about" $click={click}>

                        <motion.h2
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            About.
                        </motion.h2>

                    </ABOUT>

                    <SKILLS to="/skills">

                        <motion.h2
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            Skills.
                        </motion.h2>

                    </SKILLS>

                </BottomBar>

            </Container>

            {click ? <Intro click={click} /> : null }

        </MainContainer>
    )
}

export default Main