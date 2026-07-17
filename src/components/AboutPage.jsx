import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  width: 100vw;
  min-height: 100vh;

  position: relative;

  overflow-x: hidden;
  overflow-y: auto;

  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-bottom: 8rem;
  }
`;

const float = keyframes`
0% {
    transform: translateY(-10px);
}

50% {
    transform: translateY(15px) translateX(15px);
}

100% {
    transform: translateY(-10px);
}
`;

const Spaceman = styled.div`
  position: absolute;

  top: 8%;
  right: 5%;

  width: 20vw;

  animation: ${float} 4s ease infinite;

  z-index: 2;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 28vw;
  }

  @media (max-width: 768px) {
    width: 35vw;

    top: 5%;
    right: 5%;

    opacity: 0.8;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};

  color: ${(props) => props.theme.text};

  padding: 3rem;

  width: 58vw;

  z-index: 3;

  line-height: 2;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  font-size: calc(0.75rem + 0.5vw);

  font-family: "Karla", sans-serif;

  font-weight: 400;

  backdrop-filter: blur(10px);

  background: rgba(255, 255, 255, 0.08);

  position: absolute;

  left: 6%;
  top: 14%;

  border-radius: 20px;

  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);

  transition: all 0.3s ease;

  overflow-wrap: break-word;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 1024px) {
    width: 70vw;

    top: 16%;
  }

  @media (max-width: 768px) {
    position: relative;

    width: 88vw;

    left: 50%;
    top: 12rem;

    transform: translateX(-50%);

    padding: 2rem 1.5rem;

    font-size: 0.95rem;

    line-height: 1.9;

    margin-bottom: 4rem;

    min-height: auto;

    &:hover {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    width: 90vw;

    padding: 1.5rem;

    font-size: 0.88rem;

    line-height: 1.8;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />

        <PowerButton />

        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          I'm Prem Chalase, a BCA graduate and aspiring Performance
          Marketer passionate about building data-driven marketing
          strategies that drive growth, engagement, and conversions.

          <br />
          <br />

          I have hands-on experience in Performance Marketing, Google Ads,
          Meta Ads, SEO, Lead Generation, Audience Research, Campaign
          Planning, and Analytics. I enjoy solving business problems through
          strategic marketing initiatives and measurable outcomes.

          <br />
          <br />

          During my internships and projects, I have worked on social media
          marketing, audience segmentation, content strategy, keyword
          research, campaign planning, and website optimization. I have
          contributed to performance marketing initiatives for Udyami Bharat
          Expo 2026, including Meta Ads planning, audience analysis, budget
          estimation, and multi-platform marketing campaigns.

          <br />
          <br />

          I built and marketed projects like WebForge and Prem's Pencil
          Sketches, where I implemented Technical SEO, Schema Markup, Google
          Search Console integration, Microsoft Clarity analytics, lead
          generation funnels, and conversion-focused landing pages to improve
          user engagement and business visibility.

          <br />
          <br />

          I have practical experience with Google Analytics 4, Microsoft
          Clarity, Google Search Console, Canva, Brevo, and modern marketing
          tools that help analyze user behavior and optimize campaign
          performance.

          <br />
          <br />

          Currently, I am focused on expanding my expertise in Performance
          Marketing, Paid Advertising, Marketing Analytics, Growth Marketing,
          and Conversion Optimization while building real-world projects that
          deliver measurable results and meaningful business impact.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;