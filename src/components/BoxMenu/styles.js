import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem;
    text-align: center;
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON_STRONG};

    > h3 {
        padding: 1rem 0;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }

    > p {
        padding: .5rem 0;
        font-size: 2.3rem;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};

        > span {
            font-size: 1.3rem;
            text-decoration: line-through;
            margin-left: 3px;
        }
    }


    &:hover {
        background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM}; 

        button {
            background: ${({ theme }) => theme.COLORS.GREEN_STRONG};
            color:  ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    &:hover > * {
        color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
    }

`;

export const Img = styled.img`
    height: 10rem;
    border-radius: 50%;
`;