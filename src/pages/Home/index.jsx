import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Button } from "../../components/Button";

export function Home(){
    return(
        <Container>
            <Header/>
            <Form>
                <h1>CAFÉ FRESCO DA <br/> MANHÃ</h1>
                <p>Que na simplicidade da vida, assim como um gole de café pela manhã, que possamos <br/>Encontrar as respostas para o nosso verdadeiro propósito, a essência do viver!</p>
                <Button title="Pegue o seu Agora"/>
            </Form>
        </Container>
    )
}