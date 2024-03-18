import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    margin-left: -8px;
    margin-right: -8px;
`;

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;

    height: 100vh;
    width: 100%;

    padding-right: 17px;


    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};

    > h1 {
        padding: 20px 0 ;
        text-align: center;
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
    padding: 2rem;
    background: ${({ theme }) => theme.COLORS.GREEN};

    margin-left: 15px;


    > img {
        flex: 1 1 auto;
        max-width: 50%;
        margin-right: 2rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    > div > div {
        flex: 1;
    }

    > div > div > h3 {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 2rem;
        text-transform: uppercase;
        margin-top: 0;
    }

    > div > div >  p {
        font-size: 1rem;
        line-height: 1.8;
        color: ${({ theme }) => theme.COLORS.BLACK};

        &::first-letter {
            text-transform: uppercase;
        }
    }
`