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
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;

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

export const Box = styled.div`
    border: .2rem solid ${({ theme }) => theme.COLORS.GREEN};

    background-color: transparent;
`;


export const Image = styled.div`
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: content;

        &:hover{
            transform: scale(1.3);
        }
    }
`;

export const InfoBlog = styled.div`
    padding: 1.3rem;

    a {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        line-height: 1.5;

        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    span {
        display: block;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    p {
        font-size: 1.085rem;
        padding: .5rem 0;
        line-height: 1.8;
        color: ${({ theme }) => theme.COLORS.BLACK};
    } 

    button {
        height: 2.5rem;
        width: 10rem;

        background: ${({ theme }) => theme.COLORS.GREEN};
    }
`; 