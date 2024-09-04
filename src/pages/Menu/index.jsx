import { useEffect, useState } from 'react';
import { Container,  MenuContainer } from "./styles";

import { TitleText } from "../../components/TitleText";
import { BoxMenu } from "../../components/BoxMenu";
import { fetchMenu } from '../../services/api';
import { useCart } from '../../context/CartContext';

export function Menu(){
    const [menu, setMenu] = useState([]);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const menu = await fetchMenu();
                setMenu(menu);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        loadProducts();
    }, []);

    return (
        <Container>
            <TitleText text="Nosso " highlightedWord="Menu"/>

            <MenuContainer>
                {menu.map(menu => (
                    <BoxMenu
                        key={menu.id}
                        product={menu}
                        onAddToCart={addToCart} 
                    />
                ))}
            </MenuContainer>
        </Container>
    )
}