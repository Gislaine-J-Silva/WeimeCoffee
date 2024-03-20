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
    
    }

`;

export const Box = styled.div`
    padding: 2rem 1rem;
    text-align: center;
    border: .2rem solid ${({ theme }) => theme.COLORS.GREEN};

    background-color: transparent;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

export const Icon = styled.div`
    svg {
        width: 58px;
        height: 43px;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`;

export const User = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;

    margin: -1rem 0;
`;

export const Name = styled.h3`
    font-size: 1.3rem;
    padding: 1rem 0;
    color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Stars = styled.div`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GREEN};

    display: flex;
    flex-wrap: nowrap;

    justify-content: center;
    margin-top: -1.7rem;
`;

export const ReviewText = styled.p`
    font-size: 1rem;
    padding: 2rem 0;
    line-height: 1.8;
    color: ${({ theme }) => theme.COLORS.BLACK};
`;
