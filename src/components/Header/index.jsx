import { FiUser, FiSearch, FiMenu, FiShoppingCart, FiX, FiMinus, FiPlus } from "react-icons/fi";

import { useState } from "react";
import { useCart } from "../../context/CartContext";

import { 
    Container, Logo, Search, InputSearch, Menu, MenuItem,
    Icons, IconMenu, LabelSearch, Cart, ItensCart, AddPurchase, Img, QuantityControl
} from "../Header/styles";

import { Button } from "../../components/Button";

import imgLogo from "../../assets/logo.png";
import { getImageUrl } from "../../services/api";

export default function Header(){
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

    const { cart, updateProductQuantity, removeFromCart  } = useCart();

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
                    <FiUser className="hide-icon"/>

                    <FiSearch onClick={toggleSearch} className="hide-icon"/>
                    <Search className={isActive ? 'active' : ''}>
                        <InputSearch type="text"/>
                        <LabelSearch>
                            <FiSearch/>
                        </LabelSearch>
                    </Search>
                    
                    <FiShoppingCart onClick={toggleCart} className="hide-icon"/>
                    <Cart className={isActiveCart ? 'active' : ''}>
                        {cart.length === 0 ? (
                            <p className="empty-cart">O carrinho está vazio</p>
                        ) : (
                            cart.map((item) => (
                                <ItensCart key={item.id}>
                                    <FiX onClick={() => removeFromCart(item.id)} />
                                    <Img src={getImageUrl(item.img_product)} alt={item.name} />
                                    <AddPurchase>
                                        <h3>{item.name}</h3>
                                        <p>R$ {item.price.toFixed(2)}</p>
                                    </AddPurchase>
                                    <QuantityControl>
                                        <FiMinus onClick={() => updateProductQuantity(item.id, item.quantity - 1)} />
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => updateProductQuantity(item.id, e.target.value)}
                                        />
                                        <FiPlus onClick={() => updateProductQuantity(item.id, item.quantity + 1)} />
                                    </QuantityControl>
                                </ItensCart>
                            ))
                        )}
                        <Button title="Finalizar Pedido" />
                    </Cart>

                    <IconMenu onClick={toggleMenu}>
                        <FiMenu/>
                    </IconMenu>
                </Icons>
        </Container>
    )
    
}