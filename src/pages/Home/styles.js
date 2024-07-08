import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: url(${background}) no-repeat center center;
    background-size: cover;
    margin: 0; 
    padding: 0; 

    @media (max-width: 768px) {
        background-position: top center;
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem 7%;
`;

export const Title = styled.h1`
    font-size: 5rem;
    text-transform: uppercase;
    font-family: "EB Garamond", serif;
    text-shadow: 2px 2px 2px ${({theme}) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.CREME};
    text-align: center;
`;

export const TitleContainer = styled.div`
    padding: 12rem 0;
`;

export const Form = styled.form`
    width: 100%;
    text-align: center;

    > p {
        font-size: 2rem;
        font-family: "Lato", sans-serif;
        line-height: 2;
        padding: 1rem 0;
        color: ${({theme}) => theme.COLORS.CREME};
        text-shadow: 2px 2px 2px ${({theme}) => theme.COLORS.BLACK};
    }

`;
