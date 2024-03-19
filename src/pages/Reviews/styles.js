import styled from "styled-components";

export const Container = styled.div`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        transition: .2s linear;

        html {
            font-size: 62.5%;
            overflow-x: hidden;
        }

        body {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
        }

        section {
            padding: 2rem 7%;
        }
    }

    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem; /* Espaçamento entre as CustomerReviews */

    @media (max-width: 998px) {
        html {
            font-size: 55%;
        }
    }

    @media (max-width: 465px) {
        html {
            font-size: 50%;
        }
    }
`;

export const TitleText = styled.h1`
    padding: 20px 0 ;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.SALMON};

    span {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`; 

