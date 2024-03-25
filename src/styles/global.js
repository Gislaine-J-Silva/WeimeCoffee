import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        transition: .2s linear;
    }

    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
        color: ${({ theme }) => theme.COLORS.BLACK};

        -webkit-font-smoothing: antialiased;
    }
`;