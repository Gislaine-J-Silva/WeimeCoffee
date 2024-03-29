import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON};

    padding: 1.5rem 7%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

`;

export const Logo = styled.div`

    > img {
        height: 6rem;
    }
`

export const Menu = styled.menu`

    > a {
        margin: 0 1rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        transition: color 0.3s ease;
        text-decoration: none;
    }

    > a:hover {
        color: ${({ theme }) => theme.COLORS.GREEN};
        border-bottom: .1rem solid ${({ theme }) => theme.COLORS.GREEN_STRONG} ;
        padding-bottom: .5rem;
    }

    @media (max-width: 768px) {
        position: absolute;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
        width: 100vw;
        height: 100vh;
        top: 100%;
        right: -100%;

        &:active {
            right: 0;
        }

        > a {
            display: grid;
            place-content: center;
            margin: 7%;
            padding: 1%;
            font-size: 4rem;
            color: ${({ theme }) => theme.COLORS.BLACK};

            &:hover {
                color: #d3ad7f;
                border-bottom: none;
            }
        }
    }
    
`

export const Icons = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
        cursor: pointer;
        font-size: 3rem;
        margin-left: 2rem;

        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    #button-menu {
        display: none;
    }

    @media (max-width: 998px) {
        padding: 1.5rem 2rem;
    }

    @media (max-width: 768px) {

        #button-menu {
            display: inline-block;
        }
    }

`

export const Cart = styled.div`
    position: absolute;
    height: calc(100vh - 9.5rem);
    width: 35rem;
    padding: 0 1.5rem;
    top: 100%;
    right: -100%;
    background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};
`;