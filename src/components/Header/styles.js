import styled from "styled-components";

export const Container = styled.header`
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

    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }

    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON};

    padding: 0rem 7%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    @media (max-width: 998px) {
        html {
            font-size: 55%;
        }
    }

    @media (max-width: 465px) {
    html {
        font-size: 50%;
    }

}
`;

export const Logo = styled.div`
    margin-left: -2rem;

    > img {
        height: 6rem;
    }
`

export const Menu = styled.menu`

    > a {
        margin: 0 1rem;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        transition: color 0.3s ease;
        text-decoration: none;
    }

    > a:hover {
        color: ${({ theme }) => theme.COLORS.GREEN};
        border-bottom: 3px solid ${({ theme }) => theme.COLORS.GREEN} ;
        padding-bottom: 5px;
    }
    
`

export const Icons = styled.button`
    color: ${({ theme }) => theme.COLORS.BLACK};
    cursor: pointer;
    font-size: 2.5rem;
    margin-right: -2rem;

    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
        cursor: pointer;
        font-size: 2.5rem;
        padding: 7px;

        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }


    
`