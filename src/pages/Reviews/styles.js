import styled from "styled-components";

export const Container = styled.div`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        transition: .2s linear;
    }


    display: grid;
    grid-template-areas:
        "header"
        "reviews";
    gap: 15px;

    margin-left: -8px;
    margin-right: -8px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
   
`;

export const Header = styled.header`
    grid-area: header;
    font-size: 3rem;
    font-weight: bold;

    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.SALMON};

    span {
        text-transform: uppercase;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`; 

export const ReviewsContainer = styled.div`
    grid-area: reviews;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 2rem;
    justify-content: center;

    padding: 3rem 2rem;

    @media (max-width: 1232px) {
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }

    @media (max-width: 1104px) {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }

    @media (max-width: 913px) {
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
    }

`;


