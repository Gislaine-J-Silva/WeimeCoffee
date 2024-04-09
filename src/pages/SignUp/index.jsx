import { Container, Form, Background } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../Contact/styles";

import { Button } from "../../components/Button";

export function SignUp(){

    return(
        <Container>     
            <Header id="header"/>
            <Background/>     
            <Form>
                    <h1>Weime Coffee</h1>
                    <p>Café fresquinho toda manhã</p>

                    <h2>Crie sua Conta</h2>

                    <Input
                        placeholder="Nome"
                        type="text"
                    />

                    <Input
                        placeholder="E-mail"
                        type="text"
                    />

                    <Input
                        placeholder="Senha"
                        type="password"
                    />
                    
                    <Button title="Cadastrar"/>
                    
                    <a href="#">Já possuí conta?</a>
            </Form>
        </Container>
    )
}