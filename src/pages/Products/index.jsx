import { useEffect, useState } from 'react';
import { Container, ProductContainer } from "./styles";

import { TitleText } from "../../components/TitleText";
import { BoxProduct } from "../../components/BoxProduct";
import { fetchProducts } from '../../services/api';
import { useCart } from '../../context/CartContext';


export function Products() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        loadProducts();
    }, []);

    return(
        <Container>
            <TitleText text="Nossos " highlightedWord="Produtos" />
            <ProductContainer>
                {products.map(product => (
                    <BoxProduct
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart} 
                    />
                ))}
            </ProductContainer>
        </Container>

    )
}