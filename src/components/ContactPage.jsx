import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
background-color: ${(props) => props.theme.body};

width: 100vw;
min-height: 100vh;

display: flex;
justify-content: center;
align-items: center;

position: relative;

overflow-x: hidden;
overflow-y: auto;

padding: 4rem 0;

/* Soft Background Glow */

&::before{
    content: '';

    position: absolute;

    width: 400px;
    height: 400px;

    border-radius: 50%;

    background: rgba(0,0,0,0.05);

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

    background: rgba(0,0,0,0.04);

    bottom: 5%;
    right: 5%;

    filter: blur(100px);

    z-index: 0;
}

@media (max-width: 768px){

    align-items: flex-start;

    padding: 7rem 0 4rem 0;
}
`;

const Main = styled.div`
border: 1.5px solid rgba(0,0,0,0.2);

/* Glass Effect */

background: rgba(255,255,255,0.15);

backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

box-shadow: 0 8px 32px rgba(0,0,0,0.08);

color: ${(props) => props.theme.text};

padding: 3rem;

width: 50vw;
min-height: 65vh;

display: flex;
flex-direction: column;
justify-content: center;

font-family: 'Ubuntu Mono', monospace;

z-index: 3;

line-height: 2;

border-radius: 20px;

transition: 0.3s ease;

overflow-wrap: break-word;

&:hover{
    transform: translateY(-5px);

    background: rgba(255,255,255,0.22);
}

@media (max-width: 1024px){

    width: 70vw;
}

@media (max-width: 768px){

    width: 90vw;

    min-height: auto;

    padding: 2rem 1.5rem;

    line-height: 1.8;
}

@media (max-width: 480px){

    width: 92vw;

    padding: 1.5rem 1rem;
}
`;

const Title = styled.h1`
font-size: 3.5rem;

margin-bottom: 1.5rem;

font-family: 'Karla', sans-serif;

@media (max-width: 768px){

    font-size: 2.3rem;

    margin-bottom: 1rem;
}

@media (max-width: 480px){

    font-size: 1.9rem;
}
`;

const Text = styled.p`
font-size: 1.2rem;

margin-bottom: 1.2rem;

word-break: break-word;

line-height: 1.9;

@media (max-width: 768px){

    font-size: 1rem;

    line-height: 1.7;
}

@media (max-width: 480px){

    font-size: 0.9rem;
}
`;

const LinkText = styled.a`
color: ${(props) => props.theme.text};

text-decoration: underline;

transition: 0.3s ease;

word-break: break-word;

&:hover{
    opacity: 0.7;
}
`;

const Button = styled.a`
margin-top: 1.5rem;

width: fit-content;

padding: 1rem 2rem;

background-color: ${(props) => props.theme.text};

color: ${(props) => props.theme.body};

text-decoration: none;

border: 2px solid ${(props) => props.theme.text};

transition: 0.3s ease;

font-weight: 600;
font-size: 1.1rem;

border-radius: 10px;

&:hover{
    background-color: ${(props) => props.theme.body};

    color: ${(props) => props.theme.text};

    transform: translateY(-4px);
}

@media (max-width: 768px){

    width: 100%;

    text-align: center;

    font-size: 1rem;

    padding: 0.9rem 1rem;
}

@media (max-width: 480px){

    font-size: 0.9rem;
}
`;

const ContactPage = () => {

  return (

    <ThemeProvider theme={lightTheme}>

      <Box>

        {/* Removed Social Icons */}

        <LogoComponent theme="light" />

        <PowerButton />

        <Main>

          <Title>Let's Connect.</Title>

          <Text>
            I'm Prem Chalase, an HR and Digital Marketing enthusiast passionate about branding, audience engagement, recruitment, communication, content strategy, lead generation, and creative digital experiences.
          </Text>

          <Text>
            premchalase3@gmail.com
          </Text>

          <Text>
            +91 7760973219
          </Text>

          <Text>
            LinkedIn:
            <br />
            <LinkText
              href="https://www.linkedin.com/in/prem-chalase-21a572392/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/prem-chalase-21a572392
            </LinkText>
          </Text>

          <Text>
            GitHub:
            <br />
            <LinkText
              href="https://github.com/premchalase3-byte"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/premchalase3-byte
            </LinkText>
          </Text>

          <Button
            href="https://drive.google.com/file/d/1RdEKoEEuB85TRbJtC_inHiRGD8RCScMM/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>

        </Main>

        <BigTitle
          text="CONTACT"
          top="10%"
          right="5%"
        />

      </Box>

    </ThemeProvider>
  );
};

export default ContactPage;