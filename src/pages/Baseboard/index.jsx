import { Container, SocialMedia, Links, Credit } from "./styles";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

export function Baseboard(){
    return(
        <Container>
            <SocialMedia>
                <a><FaFacebook/></a>
                <a><FaTwitter/></a>
                <a><FaInstagram/></a>
                <a><FaLinkedin/></a>
                <a><FaPinterest/></a>
            </SocialMedia>

            <Links>
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Avaliações</a>
                <a href="#">Blogs</a>
                <a href="#">Contatos</a>
            </Links>

            <Credit>
                Criado por <span>Mr. Web Designer</span> & Recriado com BackEnd por <span>Gislaine J Silva</span>| Todos os direitos reservados
            </Credit>
        </Container>
    )
}