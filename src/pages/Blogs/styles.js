import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 7%;

    > h1 {
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};

    }

    > h1 span {
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
`;

export const ContainerBlog = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;

    padding: 3rem 2rem;
`;
