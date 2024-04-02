import styled from "styled-components";

export const Box = styled.div`
    border: .2rem solid ${({ theme }) => theme.COLORS.SALMON_STRONG};
`;


export const Image = styled.div`
    width: 100%;
    height: 25rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        &:hover{
            transform: scale(1.3);
        }
    }
`;

export const InfoBlog = styled.div`
    padding: 2rem;

    a {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        line-height: 1.5;

        &:hover {
            color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        }
    }

    span {
        display: block;
        padding-top: 1rem;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }

    p {
        font-size: 1.6rem;
        padding: 1rem 0;
        line-height: 1.8;
        color: ${({ theme }) => theme.COLORS.BLACK};
    } 

`; 