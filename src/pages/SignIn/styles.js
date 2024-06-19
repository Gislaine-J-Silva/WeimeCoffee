import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-self: stretch;

    .hide-icon {
        display: none;
    }
    

`;

export const Form = styled.form`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    opacity: 0.7;
    border-radius: 20px;
    padding: 4rem;
    width: 50%; 
    max-width: 600px; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .close-icon {
        position: absolute;
        top: 20px;
        left: 30px;
        cursor: pointer;

        svg {
            font-size: 30px;
            color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        }
    }

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        font-size: 1.8rem;
        text-align: center; 
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > a {
        font-size: 1.7rem;
        margin-top: 2rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
    }

    input {
        background: ${({ theme }) => theme.COLORS.SALMON};
        border-radius: 12px;
        margin: 1rem 0;
        width: 100%; 
        max-width: 400px; 

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.BLACK};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.8;
`;
