import styled from "styled-components";

export const Box = styled.div`
    padding: 3rem 2rem;
    text-align: center;
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON};

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
        font-size: 1.5rem;
        padding: 2rem 0;
        line-height: 1.8;
    }

    > h3 {
        font-size: 2rem;
        padding: 1rem 0;
    }
`

export const Icon = styled.div`
    svg {
        width: 58px;
        height: 43px;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`;

export const Star = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    padding: 1rem 0;
    color: ${({ theme }) => theme.COLORS.GREEN};

`;

export const User = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;

    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.COLORS.SALMON};
`
