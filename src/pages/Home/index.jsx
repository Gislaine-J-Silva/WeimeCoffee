import { Header } from "../../components/Header";
import { Container, Content, TitleContainer, Title, Form } from "./styles";
import { Button } from "../../components/Button";

export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <TitleContainer>
                    <Title>CAFÉ FRESCO DA MANHÃ</Title>
                </TitleContainer>
                <Form>
                    <p>Que na simplicidade da vida, assim como um gole de café pela manhã, que possamos <br/>Encontrar as respostas para o nosso verdadeiro propósito, a essência do viver!</p>
                    <Button title="Pegue o seu agora"/>
                </Form>
            </Content>
        </Container>
    )
}