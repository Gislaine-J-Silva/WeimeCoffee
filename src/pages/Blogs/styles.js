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

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    margin-left: -8px;
    margin-right: -8px;

    padding: 0 2rem;

    box-sizing: border-box;

    display: grid;
    grid-template-areas:
        "header"
        "blog";
    gap: 15px;
`;

export const BlogsText = styled.h1`
    grid-area: header;
    font-size: 3rem;
    padding: 20px 0;
    line-height: 1.8;
    color: ${({ theme }) => theme.COLORS.SALMON};
    text-transform: uppercase;

    text-align: center;

    span {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`;

export const ContainerBlog = styled.div`
    grid-area: blog;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 1rem;
    justify-content: center;

    padding: 3rem 2rem;

    @media (max-width: 1232px) {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }

    @media (max-width: 913px) {
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
    }
`;
