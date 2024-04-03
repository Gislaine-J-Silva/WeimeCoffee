import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    padding: 2rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON_STRONG};

    &:hover {
        background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM}; 
        border: .1rem solid ${({ theme }) => theme.COLORS.GREEN_STRONG};

    }

    &:hover > * {
        > p, h3, i {
            color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
        }

        > a {
            background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};
            color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
            border: .1rem solid ${({ theme }) => theme.COLORS.GREEN_STRONG};

            &:hover {
                background: ${({ theme }) => theme.COLORS.GREEN_STRONG};
                color: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};
            }
        }
    }
`;

export const BoxIcon = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;

    align-items: center;
    justify-content: center;
`;

export const Icons = styled.a`
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    margin: .3rem;
    font-size: 2.5rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON_STRONG};
    color: ${({ theme }) => theme.COLORS.SALMON_STRONG};

    cursor: pointer;

`;

export const ImgBox = styled.div`
    padding: 2.5rem 0;
`;

export const Img = styled.img`
    height: 25rem;
`;

export const Box = styled.div`
    h3 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }

    p {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};

        > span {
            font-size: 1.5rem;
            text-decoration: line-through;
            font-weight: lighter;
        }
    }
`;

export const Stars = styled.i`
    padding: 1.5rem;

    font-size: 1.7rem;
    color: ${({ theme }) => theme.COLORS.SALMON_STRONG};  

    display: flex;
    flex-wrap: nowrap;

    justify-content: center;
`;