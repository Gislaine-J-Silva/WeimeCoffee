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
    color: ${({theme}) => theme.COLORS.CREME};
    text-align: center;
    -webkit-text-stroke: 1px black; 
`;

export const TitleContainer = styled.div`
    padding: 12rem 0;
`;

export const Form = styled.form`
    width: 100%;
    text-align: center;

    > p {
        font-size: 2rem;
        font-weight: bold;
        line-height: 2;
        padding: 1rem 0;
        color: ${({theme}) => theme.COLORS.CREME};
        -webkit-text-stroke: 1px black; 
    }

    > button {
        background-color: ${({theme}) => theme.COLORS.CAFE};
        color: ${({theme}) => theme.COLORS.CREME};
        border-radius: 10px;
        font-weight: bold;
    }

`;
