import { motion } from 'motion/react';
import React from 'react'
import styled from 'styled-components';

const Box = styled(motion.li)`
width: 20rem;
min-height: 45vh;

background-color: ${props => props.theme.text};
color:${props => props.theme.body};

padding: 1.8rem 2rem;
margin-right: 6rem;

border-radius: 0 50px 0 50px;

display: flex;
flex-direction: column;
justify-content: space-between;

border: 1px solid ${props => props.theme.body};

transition: all 0.35s ease;

backdrop-filter: blur(5px);

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};

border: 1px solid ${props => props.theme.text};

transform: translateY(-12px) scale(1.02);

box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

@media (max-width: 768px){
    width: 85vw;
    margin-right: 0;
}
`

const Title = styled.h2`
font-size: calc(1rem + 0.5vw);

font-family: 'Montserrat', sans-serif;

font-weight: 700;

line-height: 1.4;

margin-bottom: 0.8rem;
`

const Description = styled.p`
font-size: calc(0.7rem + 0.3vw);

font-family: 'Karla',sans-serif;

font-weight: 500;

line-height: 1.7;

opacity: 0.95;

margin-bottom: 1rem;
`

const Metrics = styled.div`
display: flex;
flex-wrap: wrap;

gap: 0.5rem;

margin-bottom: 1rem;
`

const Metric = styled.span`
padding: 0.4rem 0.8rem;

border: 1px solid ${props => props.theme.body};

font-size: 0.75rem;

font-weight: 600;

font-family: 'Ubuntu Mono', monospace;

${Box}:hover &{
    border: 1px solid ${props => props.theme.text};
}
`

const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};

padding-top: 0.8rem;

display:flex;
flex-wrap:wrap;

margin-top: 0.5rem;

${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`

const Tag = styled.span`
margin-right:1rem;
margin-top: 0.5rem;

font-size:calc(0.7em + 0.3vw);

font-weight: 600;

opacity: 0.9;
`

const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;

margin-top: 1.5rem;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};

text-decoration: none;

padding:0.8rem calc(2rem + 1vw);

border-radius: 0 0 0 30px;

font-size:calc(0.8em + 0.4vw);

font-weight: 700;

transition: all 0.3s ease;

letter-spacing: 0.5px;

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
}
`

// Framer Motion Config

const Item = {

    hidden:{
        scale:0
    },

    show:{

        scale:1,

        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo} = props.data;

    return (

        <Box key={id} variants={Item}>

            <div>

                <Title>
                    {name}
                </Title>

                <Description>
                    {description}
                </Description>

                <Metrics>

                    <Metric>
                        Audience Growth
                    </Metric>

                    <Metric>
                        Engagement
                    </Metric>

                    <Metric>
                        Branding
                    </Metric>

                </Metrics>

                <Tags>

                    {
                        tags.map((t,id) => {
                            return (
                                <Tag key={id}>
                                    #{t}
                                </Tag>
                            )
                        })
                    }

                </Tags>

            </div>

            <Footer>

                <Link
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Campaign
                </Link>

            </Footer>

        </Box>
    )
}

export default Card