import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after,
h1,
h2,
h3,
h4,
h5,
h6{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6{
    display: inline-block;
}

html{
    scroll-behavior: smooth;
}

body{

    margin: 0;
    padding: 0;

    overflow-x: hidden;

    font-family: 'Source Sans Pro', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a{
    text-decoration: none;
    color: inherit;
}

button{
    font-family: inherit;
}

img{
    max-width: 100%;
    display: block;
}

@media (max-width: 768px){

    html{
        font-size: 90%;
    }

    body{
        overflow-x: hidden;
        width: 100%;
    }
}
`

export default GlobalStyle;