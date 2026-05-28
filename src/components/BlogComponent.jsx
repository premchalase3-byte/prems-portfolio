import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: 100%;
  max-width: 340px;

  text-decoration: none;

  min-height: 28rem;

  padding: 1rem;

  color: ${(props) => props.theme.text};

  border: 2px solid ${(props) => props.theme.text};

  backdrop-filter: blur(2px);

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  z-index: 5;

  background: rgba(255,255,255,0.05);

  overflow: hidden;

  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transform: translateY(-8px);
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.$img})`};

  width: 100%;
  height: 220px;

  background-size: cover;
  background-position: center center;

  border: 1px solid transparent;

  flex-shrink: 0;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 768px){
    height: 200px;
  }
`;

const Title = styled.h3`
  color: inherit;

  padding: 0.8rem 0;

  font-family: "Karla", sans-serif;

  font-weight: 700;

  font-size: 1.5rem;

  line-height: 1.4;

  word-break: break-word;

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 768px){

    font-size: 1.2rem;
  }
`;

const HashTags = styled.div`
  padding: 0.8rem 0;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  line-height: 1.5;
`;

const Tag = styled.span`
  font-size: 0.95rem;

  word-break: break-word;
`;

const Date = styled.span`
  padding-top: 1rem;

  font-size: 0.95rem;

  margin-top: auto;
`;

const Container = styled(motion.div)`
  width: 100%;

  display: flex;
  justify-content: center;
`;

// Framer Motion configuration
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
      >

        <Image $img={imgSrc} />

        <Title>{name}</Title>

        <HashTags>

          {
            tags.map((t, id) => {

              return (
                <Tag key={id}>
                  #{t}
                </Tag>
              )
            })
          }

        </HashTags>

        <Date>{date}</Date>

      </Box>

    </Container>
  );
};

export default BlogComponent;