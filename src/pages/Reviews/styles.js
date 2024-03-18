import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, mixmax(30rem, 1fr));
    gap: 2rem;
`;