import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
background-color: ${(props) => props.theme.body};

width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

position: relative;
overflow: hidden;
`;

const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};

background-color: ${(props) => props.theme.body};
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

@media (max-width: 768px){
    width: 85vw;
    padding: 2rem;
}
`;

const Title = styled.h1`
font-size: 3.5rem;
margin-bottom: 1.5rem;

@media (max-width: 768px){
    font-size: 2.5rem;
}
`;

const Text = styled.p`
font-size: 1.3rem;
margin-bottom: 1.2rem;
word-break: break-word;

@media (max-width: 768px){
    font-size: 1.05rem;
}
`;

const LinkText = styled.a`
color: ${(props) => props.theme.text};
text-decoration: underline;
transition: 0.3s ease;

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

&:hover{
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
}
`;

const ContactPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

      <Box>

        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />

        <Main>

          <Title>Let's Connect.</Title>

          <Text>
            I'm Prem Chalase, a Digital Marketing enthusiast passionate about branding, audience engagement, content strategy, lead generation, and creative digital experiences.
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
            href="https://drive.google.com/file/d/1_QEKkIuF_3zLvpSNn_qXqzXtMj6wmF_a/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>

        </Main>

        <BigTitle text="CONTACT" top="10%" right="5%" />

      </Box>

    </ThemeProvider>
  );
};

export default ContactPage;