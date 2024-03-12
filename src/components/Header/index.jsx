import { FiSearch, FiUser, FiMenu, FiShoppingCart} from "react-icons/fi";

import { Container, Logo, Menu, Icons } from "../Header/styles";
import imgLogo from "../../assets/logo-removebg-preview.png"

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={imgLogo} alt="Logomarca" />
            </Logo>

            <Menu>
                <a href="/">Início</a>
                <a href="/about">Sobre Nós</a>
                <a href="/assessments">Avaliações</a>
                <a href="/blogs">Blogs</a>
                <a href="/contacts">Contatos</a>
            </Menu>

            <Icons>
                <FiSearch />
                <FiUser />
                <FiShoppingCart/>
            </Icons>
        </Container>
    )
}