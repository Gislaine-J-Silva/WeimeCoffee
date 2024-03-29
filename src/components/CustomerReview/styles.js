import styled from "styled-components";

export const Box = styled.div`
    padding: 3rem 2rem;
    text-align: center;
    border: .2rem solid ${({ theme }) => theme.COLORS.GREEN};
`;

export const Icon = styled.div`
    svg {
        width: 58px;
        height: 43px;
        color: ${({ theme }) => theme.COLORS.GREEN};
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
    color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Stars = styled.div`
    color: ${({ theme }) => theme.COLORS.GREEN};

    display: flex;
    flex-wrap: nowrap;

    justify-content: center;
`;

export const ReviewText = styled.p`
    font-size: 1.5rem;
    padding: 2rem 0;
    line-height: 1.8;
    color: ${({ theme }) => theme.COLORS.BLACK};
`;
