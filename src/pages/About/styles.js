import styled from "styled-components";

export const PageWrapper = styled.div`
    padding: 2rem 7%;
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
`;

export const Container = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.GREEN};

    }

    > h1 span {
        color: ${({ theme }) => theme.COLORS.SALMON};
    }

`;

export const Subject = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};

`

export const Box_Img = styled.div`
    flex: 1 1 40rem;

    > img {
        width: 100%;  
    }
`;

export const ContainerAbout = styled.div`
    flex: 1 1 40rem;
    padding: 2rem;

    > h3 {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 3rem;
        text-transform: uppercase;
    }

    > p {
        font-size: 1.6rem;
        padding: 1rem 0;
        line-height: 1.8;
        color: ${({ theme }) => theme.COLORS.BLACK};

        &::first-letter {
            text-transform: uppercase
        }
    }
`;