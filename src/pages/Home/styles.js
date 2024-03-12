import styled from "styled-components";
import background from "../../assets/backgroundHome.jpg";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    margin-left: -10px;
    padding-right: 18px;


    display: flex;

    background: url(${background}) no-repeat center center;
    background-size: cover;

    font-family: 'Roboto', sans-serif;
    
`;

export const Form = styled.form`
    padding: 0 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    

    > h1 {
        font-size: 60px;
        text-transform: uppercase;
        color: ${({theme}) => theme.COLORS.BLACK};
        margin-bottom: 13px;
    }

    > p {
        font-size: 18px;
        font-weight: lighter;
        line-height: 2;
        color: ${({theme}) => theme.COLORS.BLACK};
        margin: -7px 0;
    }

    > button {
        margin-top: 20px;
    }

`;
