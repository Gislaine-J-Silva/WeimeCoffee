import { Container, Form, Background } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../Contact/styles";
import { Button } from "../../components/Button";

export function SignIn(){

    return(
        <Container>     
            <Header id="header"/>
            <Background/>     
            <Form>
                    <h1>Weime Coffee</h1>
                    <p>Café fresquinho toda manhã</p>

                    <h2>Faça seu login</h2>

                    <Input
                        placeholder="E-mail"
                        type="text"
                    />

                    <Input
                        placeholder="Senha"
                        type="password"
                    />
                    
                    <Button title="Entrar"/>
                    
                    <a href="#">Criar Conta</a>
            </Form>
        </Container>
    )
}