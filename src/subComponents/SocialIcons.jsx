import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";

import {
  Github,
  Twitter,
  Facebook,
  YouTube
} from "../components/AllSvgs";

import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;

  background-color: ${(props) =>
    props.$color === "dark"
      ? DarkTheme.text
      : DarkTheme.body};
`;

const SocialIcons = (props) => {

  return (
    <Icons>

      {/* GitHub */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1
        }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/premchalase3-byte"}
        >
          <Github
            width={25}
            height={25}
            fill={
              props.theme === "dark"
                ? DarkTheme.text
                : DarkTheme.body
            }
          />
        </a>
      </motion.div>

      {/* LinkedIn */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.2
        }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://www.linkedin.com/in/prem-chalase-21a572392/"}
        >
          <Twitter
            width={25}
            height={25}
            fill={
              props.theme === "dark"
                ? DarkTheme.text
                : DarkTheme.body
            }
          />
        </a>
      </motion.div>

      {/* Email */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.4
        }}
      >
        <a
          style={{ color: "inherit" }}
          href={"mailto:premchalase3@gmail.com"}
        >
          <Facebook
            width={25}
            height={25}
            fill={
              props.theme === "dark"
                ? DarkTheme.text
                : DarkTheme.body
            }
          />
        </a>
      </motion.div>

      {/* Contact */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.6
        }}
      >
        <a
          style={{ color: "inherit" }}
          href={"tel:+917760973219"}
        >
          <YouTube
            width={25}
            height={25}
            fill={
              props.theme === "dark"
                ? DarkTheme.text
                : DarkTheme.body
            }
          />
        </a>
      </motion.div>

      {/* Vertical Line */}

      <Line
        $color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />

    </Icons>
  );
};

export default SocialIcons;