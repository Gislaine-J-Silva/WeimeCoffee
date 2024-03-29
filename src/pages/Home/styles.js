import styled from "styled-components";
import background from "../../assets/backgroundHome.jpg";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;

    background: url(${background}) no-repeat center center;
    background-size: cover;

`;

export const Form = styled.form`
    
    padding: 2rem 7%;

    > h1 {
        font-size: 7rem;
        text-transform: uppercase;
        color: ${({theme}) => theme.COLORS.BLACK};
    }

    > p {
        font-size: 1.8rem;
        font-weight: lighter;
        line-height: 2;
        padding: 1rem 0;
        color: ${({theme}) => theme.COLORS.BLACK};
    }

`;
