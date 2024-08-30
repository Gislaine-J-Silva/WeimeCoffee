import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import { useCart } from '../context/CartContext';

export function ProductList(){
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        async function getProducts(){
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (error){
                console.error("Erro ao buscar produtos:", error);
            }
        }

        getProducts();

    }, []);

    return(
        
    )
}