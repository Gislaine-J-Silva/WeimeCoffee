import { FiUser, FiMenu, FiShoppingCart} from "react-icons/fi";

import { useState } from "react";

import { Container, Logo, Menu, MenuItem, Icons, IconMenu } from "../Header/styles";
import imgLogo from "../../assets/logo-removebg-preview.png"

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    

    return(
        <Container>
                <Logo>
                    <img src={imgLogo} alt="Logomarca" />
                </Logo>

                <Menu isOpen={isMenuOpen}>
                    <MenuItem href="/">Início</MenuItem>
                    <MenuItem href="/about">Sobre</MenuItem>
                    <MenuItem href="/assessments">Avaliações</MenuItem>
                    <MenuItem href="/blogs">Blogs</MenuItem>
                    <MenuItem href="/contact">Contatos</MenuItem>
                </Menu>

                <Icons>
                    <FiUser/>
                    <FiShoppingCart/>

                    <IconMenu onClick={toggleMenu}>
                        <FiMenu/>
                    </IconMenu>
                </Icons>
        </Container>
    )
    
}