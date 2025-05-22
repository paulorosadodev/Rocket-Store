import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: ${props => props.theme["background"]};
        color: ${props => props.theme["white-dark"]};
        -webkit-font-smoothing: antialiased;
        height: 100dvh;
        scroll-behavior: smooth;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

`;
