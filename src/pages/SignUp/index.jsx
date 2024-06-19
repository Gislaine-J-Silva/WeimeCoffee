import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { IoCloseSharp } from "react-icons/io5";


import { Input } from "../Contact/styles";

import { Button } from "../../components/Button";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
           return alert("Preencha todos os campos.")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso.")
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível realizar o cadastro.")
            }
        })
    }

    return(
        <Container>     
            <Background/>     
            <Form>
                    <a href="#" className="close-icon">
                        <IoCloseSharp/>
                    </a>
                    <h1>Weime Coffee</h1>
                    <p>Café fresquinho toda manhã</p>

                    <h2>Crie sua Conta</h2>

                    <Input
                        placeholder="Nome"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />

                    <Input
                        placeholder="E-mail"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        placeholder="Senha"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <Button title="Cadastrar" onClick={handleSignUp}/>
                    
                    <a href="#">Já possuí conta?</a>
            </Form>
        </Container>
    )
}