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
min-height: 100vh;

display: flex;
justify-content: center;
align-items: center;

position: relative;

padding: 4rem 0;

overflow: hidden;

/* Soft background glow */

&::before{
    content: '';

    position: absolute;

    width: 400px;
    height: 400px;

    background: rgba(0,0,0,0.05);

    border-radius: 50%;

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

    background: rgba(0,0,0,0.04);

    border-radius: 50%;

    bottom: 5%;
    right: 5%;

    filter: blur(100px);

    z-index: 0;
}
`;

const Main = styled.div`
border: 1.5px solid rgba(0,0,0,0.25);

/* GLASS EFFECT */
background: rgba(255,255,255,0.18);

backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

box-shadow: 0 8px 32px rgba(0,0,0,0.08);

color: ${(props) => props.theme.text};

padding: 3rem;

width: 55vw;

display: flex;
flex-direction: column;
gap: 2rem;

font-family: 'Ubuntu Mono', monospace;

z-index: 3;

line-height: 1.8;

border-radius: 20px;

@media (max-width: 768px){
    width: 85vw;
    padding: 2rem;
}
`;

const Title = styled.h1`
font-size: 3rem;
margin-bottom: 1rem;

font-family: 'Karla', sans-serif;
`;

const Card = styled.div`
border: 1px solid rgba(0,0,0,0.2);

/* TRANSPARENT GLASS CARD */

background: rgba(255,255,255,0.12);

backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

padding: 1.5rem;

border-radius: 15px;

transition: 0.3s ease;

box-shadow: 0 4px 20px rgba(0,0,0,0.05);

&:hover{

    background: rgba(0,0,0,0.85);

    color: white;

    transform: translateY(-6px) scale(1.01);

    border: 1px solid rgba(255,255,255,0.2);
}
`;

const CertTitle = styled.h2`
font-size: 1.5rem;
margin-bottom: 0.7rem;

font-family: 'Karla', sans-serif;
`;

const Text = styled.p`
font-size: 1rem;

opacity: 0.9;
`;

const CertificationsPage = () => {

  return (

    <ThemeProvider theme={lightTheme}>

      <Box>

        <LogoComponent theme="light" />

        <SocialIcons theme="light" />

        <PowerButton />

        <Main>

          <Title>Certifications.</Title>

          <Card>

            <CertTitle>
              Digital Marketing Internship – Corenest Tech LLP / Writebing
            </CertTitle>

            <Text>
              Successfully completed a Digital Marketing Internship focused on
              branding, audience engagement, content promotion, and lead generation.
            </Text>

            <Text>
              Year: 2026
            </Text>

          </Card>

          <Card>

            <CertTitle>
              AI-powered Performance Google Ads Certification
            </CertTitle>

            <Text>
              Learned AI-driven Google Ads optimization techniques,
              campaign performance strategies, and audience targeting methods.
            </Text>

          </Card>

          <Card>

            <CertTitle>
              Google Digital Garage – Fundamentals of Digital Marketing
            </CertTitle>

            <Text>
              Covered SEO, SEM, analytics, branding, digital campaigns,
              content marketing, and online business growth strategies.
            </Text>

          </Card>

          <Card>

            <CertTitle>
              Google Analytics Certification
            </CertTitle>

            <Text>
              Gained knowledge in website analytics, audience behavior tracking,
              campaign performance analysis, and data-driven decision making.
            </Text>

          </Card>

          <Card>

            <CertTitle>
              Meta Social Media Marketing Certification
            </CertTitle>

            <Text>
              Currently pursuing advanced learning in Meta Ads,
              social media strategy, audience targeting, and campaign management.
            </Text>

            <Text>
              Status: Pursuing
            </Text>

          </Card>

        </Main>

        <BigTitle
          text="CERTS"
          top="10%"
          right="5%"
        />

      </Box>

    </ThemeProvider>
  );
};

export default CertificationsPage;