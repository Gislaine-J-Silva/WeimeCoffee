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
    img {
        height: 70px;
    }
`

export const Menu = styled.nav`
    display: flex;

    @media (max-width: 998px) {
        padding-left: 3rem;
    }

    @media (max-width: 768px) {
        position: absolute;
        flex-direction: column;
        background: #010103;
        width: 100vw;
        height: 100vh;
        top: 100%;
        right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        transition: right 0.3s ease;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
        border-top: .1rem solid ${({ theme }) => theme.COLORS.SALMON};
    }
`;

export const MenuItem = styled.a`
    margin: 0 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }

    @media (max-width: 768px) {
        display: grid;
        place-content: center;
        margin: 7%;
        padding: 1%;
        font-size: 4rem;
    }
`;

export const Icons = styled.div`
    display: flex;
    margin-left: 2rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
        cursor: pointer;
        font-size: 2.8rem;
        margin-left: 8px;


        &:hover {
            color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        }
    }


    @media (max-width: 998px) {
        padding-right: 1.5rem;

    }

`

export const Search = styled.div`
    display: flex;
    align-items: center;

    width: 50rem;
    height: 5rem;
    top: 115%;
    right: 7%;

    position: absolute;

    background: ${({ theme }) => theme.COLORS.WHITE};

    transform: scale(0);
    transform-origin: top;

    &.active {
        transform: scaleY(1);
    }
`;

export const InputSearch = styled.input`
    width: 100%;
    height: 100%;
    color: #010103;
    padding: 1rem;
    font-size: 1.6rem;
    text-transform: none;

    background: ${({ theme }) => theme.COLORS.WHITE};

`;

export const LabelSearch = styled.label`
    svg {
        font-size: 2.2rem;
        margin-right: 1.5rem;
        cursor: pointer;
        color: #010103;
    }
`;

export const IconMenu = styled.div`
    display: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
        cursor: pointer;
        font-size: 3rem;
        margin-left: 2rem;

        &:hover {
            color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        }
    }

    @media (max-width: 768px) {
        display: inline-block
    }
`;

export const Cart = styled.div`
    position: absolute;
    height: calc((100vh - 9.5rem) / 2);
    width: 40rem;
    padding: 0 1.5rem;
    top: 100%;
    right: -100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON};
    overflow-y: auto;

    &.active {
        right: 0;
    }

    &::-webkit-scrollbar {
        width: 5px; 
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.SALMON};
        border-radius: 4px;
    }

    > button {
        width: 100%;
        position: relative;
        margin-bottom: 2.5rem;
    }
`;

export const ItensCart = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    position: relative;
    gap: 1.5rem;

    > svg {
        position: absolute;
        font-size: 2rem;
        top: 1rem;
        right: 1rem;
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        cursor: pointer;

        &:hover{
            color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
        }
    }

    border: .1rem solid ${({ theme }) => theme.COLORS.SALMON_STRONG};
    padding: 1rem;
`;

export const Img = styled.img`
    height: 7rem;
    border-radius: 10px;
`;

export const AddPurchase = styled.div`
    h3 {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
        padding-bottom: .5rem;
    }

    > p {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
    }
`;
