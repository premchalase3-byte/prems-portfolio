import { motion } from 'motion/react';
import React from 'react';
import styled from 'styled-components';

const Box = styled(motion.li)`
width: 24rem;
max-width: 24rem;
min-height: auto;

background-color: ${props => props.theme.text};
color:${props => props.theme.body};

padding: 1.5rem;
margin-right: 4rem;

border-radius: 0 40px 0 40px;

display: flex;
flex-direction: column;
justify-content: space-between;

border: 1px solid ${props => props.theme.body};

transition: all 0.35s ease;

backdrop-filter: blur(5px);

overflow: hidden;
overflow-wrap: break-word;
word-break: break-word;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};

border: 1px solid ${props => props.theme.text};

transform: translateY(-12px);

box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

@media (max-width: 768px){

    width: 90vw;
    max-width: 90vw;

    min-height: auto;

    margin-right: 0;

    padding: 1.2rem;

    border-radius: 20px;
}
`;

const Title = styled.h2`
font-size: 1.25rem;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
line-height: 1.5;
margin-bottom: 0.8rem;

word-wrap: break-word;
overflow-wrap: break-word;

@media (max-width:768px){
    font-size: 1.1rem;
}
`;

const Description = styled.p`
font-size: 0.95rem;
font-family: 'Karla',sans-serif;
font-weight: 500;
line-height: 1.8;
opacity: 0.95;
margin-bottom: 1rem;

word-break: break-word;
overflow-wrap: break-word;

@media (max-width:768px){
    font-size: 0.9rem;
}
`;

const Metrics = styled.div`
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
margin-bottom: 1rem;
`;

const Metric = styled.span`
padding: 0.35rem 0.7rem;
border: 1px solid ${props => props.theme.body};
font-size: 0.7rem;
font-weight: 600;
font-family: 'Ubuntu Mono', monospace;

${Box}:hover &{
    border: 1px solid ${props => props.theme.text};
}
`;

const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};

padding-top: 0.8rem;

display:flex;
flex-wrap:wrap;

gap:0.4rem;

margin-top: 0.5rem;

${Box}:hover &{
    border-top: 2px solid ${props =>props.theme.text};
}
`;

const Tag = styled.span`
font-size:0.8rem;
font-weight:600;
opacity:0.9;

word-break: break-word;
overflow-wrap: anywhere;
`;

const Footer = styled.footer`
display:flex;
justify-content:center;
align-items:center;
margin-top:1.2rem;
`;

const Link = styled.a`
background-color:${props =>props.theme.body};
color:${props =>props.theme.text};

text-decoration:none;

padding:0.7rem 1.5rem;

border-radius:12px;

font-size:0.9rem;
font-weight:700;

transition:all 0.3s ease;

text-align:center;

${Box}:hover &{
    background-color:${props =>props.theme.text};
    color:${props =>props.theme.body};
}

@media (max-width:768px){
    width:100%;
}
`;

const Item = {
    hidden: {
        scale: 0
    },

    show: {
        scale: 1,

        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
};

const Card = ({ data }) => {

    const { name, description, tags, demo } = data;

    return (
        <Box variants={Item}>

            <div>

                <Title>
                    {name}
                </Title>

                <Description>
                    {description}
                </Description>

                <Metrics>
                    <Metric>Marketing</Metric>
                    <Metric>Growth</Metric>
                    <Metric>Analytics</Metric>
                </Metrics>

                <Tags>

                    {tags.map((tag, index) => (
                        <Tag key={index}>
                            #{tag}
                        </Tag>
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