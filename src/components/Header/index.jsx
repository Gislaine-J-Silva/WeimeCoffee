import { FiSearch, FiUser, FiMenu, FiShoppingCart} from "react-icons/fi";

import { Container, Logo, Menu, Icons } from "../Header/styles";
import imgLogo from "../../assets/logo-removebg-preview.png"

export function Header(){
    return(
        <html>
            <Container>
                <Logo>
                    <img src={imgLogo} alt="Logomarca" />
                </Logo>

                <Menu>
                    <a href="/">Início</a>
                    <a href="/about">Sobre</a>
                    <a href="/assessments">Avaliações</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/contact">Contato</a>
                </Menu>

                <Icons>
                    <FiSearch />
                    <FiUser />
                    <FiShoppingCart/>
                </Icons>
            </Container>
        </html>
    )
}