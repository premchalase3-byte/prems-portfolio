import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;

color: ${props =>
props.$color === 'dark'
? DarkTheme.text
: DarkTheme.body};

font-family: 'Pacifico', cursive;

position: fixed;

left: 2rem;
top: 2rem;

z-index: 30;

font-size: 2rem;

transition: all 0.3s ease;

@media (max-width: 768px){

    left: 1rem;
    top: 1rem;

    font-size: 1.3rem;
}
`

const LogoComponent = (props) => {

    return (

        <Logo $color={props.theme}>
            PC
        </Logo>

    )
}

export default LogoComponent