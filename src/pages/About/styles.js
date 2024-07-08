import styled from "styled-components";

export const PageWrapper = styled.div`
    padding: 8rem 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;


    @media (min-width: 300px) and (max-width: 1200px) {
        flex-direction: column;
    }

`;


export const ContainerAbout = styled.div`
    margin-right: 10rem;

    > h3 {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 3rem;
        text-transform: uppercase;
        font-family: "EB Garamond", serif;
    }


    > p {
        font-size: 1.6rem;
        line-height: 1.8;
        margin-top: 1.5rem;
        font-family: "Lato", sans-serif;
        color: ${({ theme }) => theme.COLORS.BLACK};

        &::first-letter {
            text-transform: uppercase
        }
    }

    .subtitle2 {
        margin-top: 5rem;
    }

    .titleContent {
        font-size: 2rem;
        font-family: "Baskervville SC", serif;
        font-weight: lighter;
        padding-bottom: 5px;
    }

    button {
        align-self: flex-start;
        margin: 3rem 0;
    }

    @media (max-width: 789px) {
        margin-right: 0;
        margin-bottom: 2rem;
    }

`;

export const Box_Img = styled.div`
    > img {
        width: 40vw;
        height: auto;
        clip-path: inset(5px 0 0 0 round 15% 0);

    }

    @media (min-width: 300px) and (max-width: 1205px) {
        width: 100%;
        
        > img {
            width: 100%;
            height: auto;
        }
    }


`;

