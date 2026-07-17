import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: 23rem;
  max-width: 23rem;
  min-height: 24rem;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  padding: 1.3rem;
  margin-right: 2rem;

  border-radius: 0 30px 0 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid ${(props) => props.theme.body};

  transition: all 0.35s ease;

  backdrop-filter: blur(5px);

  overflow: hidden;
  overflow-wrap: break-word;
  word-break: break-word;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};

    border: 1px solid ${(props) => props.theme.text};

    transform: translateY(-8px);

    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    width: 90vw;
    max-width: 90vw;

    min-height: 24rem;

    margin-right: 0;

    padding: 1rem;

    border-radius: 20px;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;

  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const Description = styled.p`
  min-height: 8rem;

  font-size: 0.87rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;

  line-height: 1.7;
  opacity: 0.95;

  margin-bottom: 1rem;

  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    min-height: auto;
    font-size: 0.84rem;
  }
`;

const Metrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
`;

const Metric = styled.span`
  padding: 0.3rem 0.7rem;

  border: 1px solid ${(props) => props.theme.body};

  border-radius: 8px;

  font-size: 0.7rem;
  font-weight: 600;
  font-family: "Ubuntu Mono", monospace;

  transition: 0.3s ease;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Tags = styled.div`
  border-top: 1.5px solid ${(props) => props.theme.body};

  padding-top: 0.8rem;

  display: flex;
  flex-wrap: wrap;

  gap: 0.4rem;

  margin-top: 0.5rem;

  ${Box}:hover & {
    border-top: 1.5px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  padding: 0.3rem 0.7rem;

  border-radius: 10px;

  background: rgba(128, 128, 128, 0.15);

  font-size: 0.72rem;
  font-weight: 600;

  transition: all 0.3s ease;

  word-break: break-word;
  overflow-wrap: anywhere;

  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  text-decoration: none;

  padding: 0.7rem 1.5rem;

  border-radius: 10px;

  font-size: 0.85rem;
  font-weight: 700;

  transition: all 0.3s ease;

  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },

  show: {
    scale: 1,

    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = ({ data }) => {
  const { name, description, tags, demo } = data;

  return (
    <Box variants={Item}>
      <div>
        <Title>{name}</Title>

        <Description>{description}</Description>

        <Metrics>
          <Metric>Marketing</Metric>
          <Metric>Growth</Metric>
          <Metric>Analytics</Metric>
        </Metrics>

        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </Tags>
      </div>

      <Footer>
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Link>
      </Footer>
    </Box>
  );
};

export default Card;