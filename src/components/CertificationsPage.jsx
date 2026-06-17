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

padding: 4rem 0;

overflow-x: hidden;
overflow-y: auto;

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

@media (max-width: 768px){
    padding: 7rem 0 4rem 0;
    align-items: flex-start;
}
`;

const Main = styled.div`
border: 1.5px solid rgba(0,0,0,0.25);

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

transition: 0.3s ease;

&:hover{
    transform: translateY(-5px);
}

@media (max-width: 1024px){
    width: 70vw;
}

@media (max-width: 768px){
    width: 90vw;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
}

@media (max-width: 480px){
    width: 92vw;
    padding: 1.5rem 1rem;
}
`;

const Title = styled.h1`
font-size: 3rem;
margin-bottom: 0.5rem;

font-family: 'Karla', sans-serif;

@media (max-width: 768px){
    font-size: 2rem;
}

@media (max-width: 480px){
    font-size: 1.7rem;
}
`;

const Card = styled.div`
border: 1px solid rgba(0,0,0,0.2);

background: rgba(255,255,255,0.12);

backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

padding: 1.5rem;

border-radius: 15px;

transition: 0.3s ease;

box-shadow: 0 4px 20px rgba(0,0,0,0.05);

overflow-wrap: break-word;

&:hover{
    background: rgba(0,0,0,0.85);
    color: white;

    transform: translateY(-6px);

    border: 1px solid rgba(255,255,255,0.2);
}

@media (max-width: 768px){
    padding: 1.2rem;
}

@media (max-width: 480px){
    padding: 1rem;
}
`;

const CertTitle = styled.h2`
font-size: 1.5rem;
margin-bottom: 0.7rem;

font-family: 'Karla', sans-serif;

line-height: 1.5;

@media (max-width: 768px){
    font-size: 1.2rem;
}

@media (max-width: 480px){
    font-size: 1rem;
}
`;

const Text = styled.p`
font-size: 1rem;

opacity: 0.9;

line-height: 1.8;

@media (max-width: 768px){
    font-size: 0.95rem;
    line-height: 1.7;
}

@media (max-width: 480px){
    font-size: 0.88rem;
}
`;

const CertificationsPage = () => {

  return (

    <ThemeProvider theme={lightTheme}>

      <Box>

        <LogoComponent theme="light" />

        <PowerButton />

        <Main>

          <Title>Certifications & Credentials</Title>

          <Text>
            Verified certifications and practical experience in SEO,
            Analytics, Lead Generation, Email Marketing, and Digital Marketing.
          </Text>

          <Card>

            <CertTitle>
              Google Analytics Certification
            </CertTitle>

            <Text>
              Issued by Google. Demonstrates proficiency in Google Analytics 4 (GA4),
              audience analysis, traffic acquisition, event tracking, conversion
              measurement, and data-driven marketing decisions.
            </Text>

            <Text>
              Year: 2026
            </Text>

          </Card>

          <Card>

            <CertTitle>
              HubSpot SEO Certification
            </CertTitle>

            <Text>
              Issued by HubSpot Academy. Covers keyword research, on-page SEO,
              technical SEO, content optimization, link building, and search
              engine ranking strategies.
            </Text>

            <Text>
              Year: 2026
            </Text>

          </Card>

          <Card>

            <CertTitle>
              Digital Marketing Internship – Corenest Tech LLP
            </CertTitle>

            <Text>
              Completed internship focused on SEO, social media marketing,
              lead generation, content marketing, audience engagement,
              and digital campaign execution.
            </Text>

            <Text>
              Also I was the Best Performer Of the Internship Program for my contributions to digital marketing campaigns and measurable results.
            </Text>

          </Card>

          <Card>

            <CertTitle>
              Digital Marketing & Analytics Learning Track
            </CertTitle>

            <Text>
              Practical experience with Google Analytics 4, Microsoft Clarity,
              Google Search Console, Brevo Email Marketing, SEO optimization,
              and performance analysis through projects and internships.
            </Text>

          </Card>

        </Main>

        <BigTitle
          text="CERTIFICATIONS"
          top="10%"
          right="5%"
        />

      </Box>

    </ThemeProvider>
  );
};

export default CertificationsPage;