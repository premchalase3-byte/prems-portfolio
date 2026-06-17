import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "motion/react";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  min-height: 450vh;

  position: relative;

  display: flex;
  align-items: center;

  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;

    padding: 7rem 0 4rem 0;

    align-items: flex-start;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;

  top: 12rem;
  left: calc(8rem + 12vw);

  height: auto;

  display: flex;
  align-items: stretch;

  color: white;

  @media (max-width: 768px) {
    position: relative;

    top: 0;
    left: 0;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    padding: 0;

    margin: 0;
  }
`;

const Rotate = styled.span`
  display: block;

  position: fixed;

  right: 1rem;
  bottom: 1rem;

  width: 80px;
  height: 80px;

  z-index: 1;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;

    right: 0.8rem;
    bottom: 0.8rem;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.25,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);

  const yinyang = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const element = ref.current;

    const rotate = () => {
      if (!element) return;

      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      if (yinyang.current) {
        yinyang.current.style.transform =
          "rotate(" + -window.pageYOffset + "deg)";
      }
    };

    window.addEventListener("scroll", rotate);

    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />

        <PowerButton />

        <Main
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang
            width={window.innerWidth <= 768 ? 55 : 80}
            height={window.innerWidth <= 768 ? 55 : 80}
            fill={DarkTheme.text}
          />
        </Rotate>

        <BigTitlte
          text="PROJECTS"
          top="10%"
          right="20%"
        />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;