import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 7%;
    
    display: grid;
    grid-area: 
        'social-media'
        'menu'
        'credit'
    ;

    align-items: center;
    justify-content: center;

    text-align: center;
    background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};
`;

export const SocialMedia = styled.div`
    grid-area: 'social-media';
    a {
        width: 5rem;
        height: 5rem;
        margin: .3rem;
        font-size: 2.5rem;
        line-height: 5rem;
        border: .1rem solid ${({ theme }) => theme.COLORS.GREEN_STRONG};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.GREEN_STRONG};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        

        &:hover {
            color: ${({ theme }) => theme.COLORS.WHITE};
            background:${({ theme }) => theme.COLORS.GREEN_STRONG};
        }
    }
`;

export const Credit = styled.p`
    grid-area: 'credit';
    font-size: 1.5rem;
    padding: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GREEN_STRONG};

    > span {
        color: ${({ theme }) => theme.COLORS.SALMON_STRONG};
    }
`;
