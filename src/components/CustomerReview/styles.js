import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Box = styled.div`
    padding: 3rem 2rem;
    text-align: center;
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON};

    background-color: ${({ theme }) => theme.COLORS.GREEN};

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

export const Icon = styled.div`
    svg {
        width: 58px;
        height: 43px;
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
`;

export const User = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    object-fit: cover;
`;

export const Name = styled.h3`
    font-size: 2rem;
    padding: 1rem 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Stars = styled.div`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.SALMON};

    display: flex;
    flex-wrap: nowrap;

    justify-content: center;
`;

export const ReviewText = styled.p`
    font-size: 1.5rem;
    padding: 2rem 0;
    line-height: 1.8;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
