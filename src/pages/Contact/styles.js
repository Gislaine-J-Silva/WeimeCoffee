import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem 7%;
`;

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background: ${({ theme }) => theme.COLORS.GREEN_MEDIUM};
`;

export const Map = styled.iframe`
    flex: 1 1 40rem;
    width: 100%;
    object-fit: cover;
`;

export const Form = styled.form`
    padding: 5rem 2rem;
    flex: 1 1 40rem;
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
    color: ${({ theme }) => theme.COLORS.BLACK};
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
    color: ${({ theme }) => theme.COLORS.BLACK};
    background: none;

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -webkit-moz-appearance: textfield;
    }
`;