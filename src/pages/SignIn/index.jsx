import { Container, Form, Background } from "./styles";
import { IoCloseSharp } from "react-icons/io5";

import { Input } from "../Contact/styles";
import { Button } from "../../components/Button";

export function SignIn(){

    return(
        <Container>       
            <Form>
                    <a href="#" className="close-icon">
                        <IoCloseSharp/>
                    </a>
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
            <Background/> 
        </Container>
    )
}