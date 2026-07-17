import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: 100%;
  max-width: 380px;

  text-decoration: none;

  min-height: 26rem;

  padding: 1rem;

  color: ${(props) => props.theme.text};

  border: 2px solid ${(props) => props.theme.text};

  backdrop-filter: blur(8px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  z-index: 5;

  background: rgba(255, 255, 255, 0.08);

  overflow: hidden;

  border-radius: 18px;

  transition: all 0.35s ease;

  &:hover {
    color: ${(props) => props.theme.body};

    background-color: ${(props) => props.theme.text};

    transform: translateY(-10px);

    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.$img})`};

  width: 100%;
  height: 240px;

  background-size: cover;
  background-position: center center;

  border-radius: 12px;

  border: 1px solid transparent;

  flex-shrink: 0;

  transition: all 0.3s ease;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};

    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

const Title = styled.h3`
  color: inherit;

  padding: 1rem 0;

  font-family: "Karla", sans-serif;

  font-weight: 700;

  font-size: 1.45rem;

  line-height: 1.4;

  word-break: break-word;

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HashTags = styled.div`
  padding: 1rem 0;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  line-height: 1.5;
`;

const Tag = styled.span`
  padding: 0.3rem 0.7rem;

  border-radius: 8px;

  background: rgba(128, 128, 128, 0.15);

  font-size: 0.8rem;

  font-weight: 600;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1rem;
`;

const Date = styled.span`
  font-size: 0.85rem;

  font-weight: 600;
`;

const ReadMore = styled.span`
  font-size: 0.9rem;

  font-weight: 700;

  transition: 0.3s ease;

  ${Box}:hover & {
    transform: translateX(5px);
  }
`;

const Container = styled(motion.div)`
  width: 100%;

  display: flex;
  justify-content: center;
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

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
    <Container variants={Item}>
      <Box
        target="_blank"
        href={`${link}`}
        rel="noopener noreferrer"
      >
        <Image $img={imgSrc} />

        <Title>{name}</Title>

        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>{t}</Tag>;
          })}
        </HashTags>

        <Footer>
          <Date>{date}</Date>

          <ReadMore>Read More →</ReadMore>
        </Footer>
      </Box>
    </Container>
  );
};

export default BlogComponent;