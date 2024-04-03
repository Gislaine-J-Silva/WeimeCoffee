import { FiUser, FiSearch, FiMenu, FiShoppingCart, FiX} from "react-icons/fi";

import { useState } from "react";

import { Container, Logo, Search, InputSearch, Menu, MenuItem,  Icons, IconMenu, LabelSearch, Cart, ItensCart, AddPurchase, Img } from "../Header/styles";

import { Button } from "../../components/Button";

import imgLogo from "../../assets/logo-removebg-preview.png"
import imgProductCart from "../../assets/Café Latte.jpg";

export function Header(){
    //useState
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActiveCart, setIsActiveCart] = useState(false);

    //Function
    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }
    
    function toggleSearch(){
        setIsActive(!isActive);
    }

    function toggleCart(){
        setIsActiveCart(!isActiveCart);
    }

    return(
        <Container>
                <Logo>
                    <img src={imgLogo} alt="Logomarca" />
                </Logo>

                <Menu isOpen={isMenuOpen}>
                    <MenuItem href="/">Início</MenuItem>
                    <MenuItem href="/about">Sobre</MenuItem>
                    <MenuItem href="/menu">Menu</MenuItem>
                    <MenuItem href="/products">Produtos</MenuItem>
                    <MenuItem href="/assessments">Avaliações</MenuItem>
                    <MenuItem href="/blogs">Blogs</MenuItem>
                    <MenuItem href="/contact">Contatos</MenuItem>
                </Menu>

                <Icons>
                    <FiUser/>

                    <FiSearch onClick={toggleSearch}/>
                    <Search className={isActive ? 'active' : ''}>
                        <InputSearch type="text"/>
                        <LabelSearch>
                            <FiSearch/>
                        </LabelSearch>
                    </Search>
                    
                    <FiShoppingCart onClick={toggleCart}/>
                    <Cart className={isActiveCart ? 'active' : ''}>
                        <ItensCart>
                            <FiX/>
                            <Img src={imgProductCart} alt="produto" />

                            <AddPurchase>
                                <h3>Itens do carrinho 01</h3>
                                <p>R$ 12,50</p>
                            </AddPurchase>
                        </ItensCart>

                        <ItensCart>
                            <FiX/>
                            <Img src={imgProductCart} alt="produto" />

                            <AddPurchase>
                                <h3>Itens do carrinho 01</h3>
                                <p>R$ 12,50</p>
                            </AddPurchase>
                        </ItensCart>

                        <ItensCart>
                            <FiX/>
                            <Img src={imgProductCart} alt="produto" />

                            <AddPurchase>
                                <h3>Itens do carrinho 01</h3>
                                <p>R$ 12,50</p>
                            </AddPurchase>
                        </ItensCart>
                        

                        <Button title="Finalizar Pedido"/>
                    </Cart>

                    <IconMenu onClick={toggleMenu}>
                        <FiMenu/>
                    </IconMenu>
                </Icons>
        </Container>
    )
    
}