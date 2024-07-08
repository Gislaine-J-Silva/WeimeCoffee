import styled from "styled-components";

export const Container = styled.button`
    display: inline-block;

    height: 45px;
    width: 195px;

    margin-top: 10px;
    font-size: 17px;
    
    color: ${({theme}) => theme.COLORS.CREME};
    background: ${({ theme }) => theme.COLORS.CASTANHO_CINZENTO};
    border: none;
    border-radius: 10px;

    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
`;