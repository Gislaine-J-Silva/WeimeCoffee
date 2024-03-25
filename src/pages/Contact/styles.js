import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem 7%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
`;

export const ContactText = styled.h1`
    grid-area: header;

    font-size: 4rem;
    padding-bottom: 3.5rem;
    text-transform: uppercase;
    text-align: center;

    color: ${({ theme }) => theme.COLORS.GREEN};

    span {
        color: ${({ theme }) => theme.COLORS.SALMON}
    }
`;

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};
`;

export const Map = styled.iframe`
    flex: 1 1 45rem;
    width: 100%;
    object-fit: cover;
`;

export const Form = styled.form`
    padding: 5rem 2rem;
    flex: 1 1 45rem;
    text-align: center;

    h3 {
        font-size: 3.5rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`;


export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #010103;
    border: .1rem solid ${({ theme }) => theme.COLORS.GREEN};
`;

export const Icon = styled.div`
    font-size: 2rem;
    padding-left: 2rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Input = styled.input`
    font-size: 1.7rem;
    width: 100%;
    padding: 2rem;
    text-transform: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: none;
`;