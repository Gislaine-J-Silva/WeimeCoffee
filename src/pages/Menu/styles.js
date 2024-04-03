import styled from "styled-components";

export const Container = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.SALMON};
    }

    > h1 span {
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }

    padding: 2rem 7%;
`;

export const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
    justify-content: center;

    padding: 3rem 2rem;
`;