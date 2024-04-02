import styled from "styled-components";

export const Container = styled.h1`
    font-size: 4rem;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 3.5rem;
    padding-top: 3.5rem;
    
    color: ${({ theme }) => theme.COLORS.SALMON_STRONG};

    > span {
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
`;
