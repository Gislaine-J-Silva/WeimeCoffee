import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        'header header'
        'content1 content2' 
    ;
`

export const Header = styled.div`
    border-bottom: .5px solid ${({ theme}) => theme.COLORS.SALMON_STRONG};
    grid-area: header;

    position: relative;
    display: flex;
    align-items: center;

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
            color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        }
    }
    
`

export const Avatar = styled.div`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    border-radius: 50%;
    border: .5px solid ${({ theme}) => theme.COLORS.SALMON_STRONG};;
    margin-left: 50px;

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
    > svg {
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
        font-size: 36px;
    }
`

export const ProfileOption = styled.div`
    padding: 20px;
    grid: content1;
`

export const ConfigProfile = styled.div`
    padding: 20px;
    grid: content2;
`