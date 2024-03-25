import styled from "styled-components";
import background from "../../assets/backgroundHome.jpg";

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
    }


    height: 100vh;
    width: 100%;
    display: flex;

    margin-left: -8px;
    margin-right: -8px;
    padding: 0 2rem;

    background: url(${background}) no-repeat center center;
    background-size: cover;
    
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
