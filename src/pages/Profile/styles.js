import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.COLORS.CREME};
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-columns: 280px auto;
    grid-template-areas: 
        'header header'
        'content1 content2' 
    ;
`

export const Header = styled.div`
    background: ${({ theme}) => theme.COLORS.BEGE_CLARO};
    grid-area: header;

    position: relative;
    display: flex;
    align-items: center;

    padding-left: 25px;

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 15px;
            color: ${({ theme}) => theme.COLORS.BLACK};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.CAFE};
        }
    }
    
`

export const Avatar = styled.div`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    border-radius: 50%;
    border: .5px solid ${({ theme}) => theme.COLORS.CAFE};

    width: 85px;
    height: 85px;
    position: relative;

    > img {
        width: 100%; 
        height: 100%; 

        object-fit: cover;
        object-position: center; 

        border-radius: 50%;
  }
`

export const Logout = styled.button`
    border: none;
    background: none;
    margin-left: auto;
    padding-right: 50px;
    cursor: pointer;

    > svg {
        color: ${({ theme }) => theme.COLORS.CAFE};
        font-size: 36px;
    }
`

export const ProfileOption = styled.div`
    grid: content1;

    list-style-type: none;
    border-right: 15px solid ${({ theme }) => theme.COLORS.BEGE_CLARO}; /* Adiciona a borda direita */

    padding: 100px 50px;

    > li {
        margin-bottom: 15px;
        padding: 10px;

        color: ${({ theme}) => theme.COLORS.CAFE};
        background-color: ${({ theme}) => theme.COLORS.BEGE_CLARO};

        border: transparent;
        border-radius: 5px;
        font-size: 15px;

        &:hover {
            background-color: ${({ theme}) => theme.COLORS.BEGE_MEDIUM};
        }
        
    }
`

export const ConfigProfile = styled.div`
    grid: content2;
    display: block;

`