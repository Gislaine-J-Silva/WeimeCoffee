import { Container, Box, Map, Form, InputContainer, Icon, Input } from "./styles";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

import { Button } from "../../components/Button";
import { TitleText } from "../../components/TitleText";

export function Contact(){
    return(
        <Container>
            <TitleText text="nossos " highlightedWord="contatos"/>
            <Box>
                            <Map
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.15636054586446!2d12.475255314389326!3d41.898265173770625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604fd2bf8017%3A0x6549078ef8ffb2d8!2sSant&#39;%20Eustachio%20Il%20Caff%C3%A8!5e0!3m2!1spt-BR!2sbr!4v1684452664338!5m2!1spt-BR!2sbr" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                                
                            <Form>
                                <h3>Entre em Contato</h3>
                                <InputContainer>
                                    <Icon>
                                        <FaUser/>
                                    </Icon>
                                    <Input
                                        type="text"
                                        placeholder="Nome"
                                    />
                                </InputContainer>

                                <InputContainer>
                                    <Icon>
                                        <FaEnvelope/>
                                    </Icon>
                                    <Input
                                        type="email"
                                        placeholder="E-mail"
                                    />
                                </InputContainer>

                                <InputContainer>
                                    <Icon>
                                        <FaPhoneAlt/>
                                    </Icon>
                                    <Input
                                        type="phone"
                                        maxLength="15"
                                        placeholder="DDD + Número"
                                    />
                                </InputContainer>

                                <Button title="Contate Agora"/>
                            </Form>
            </Box>
        </Container>
    )
}