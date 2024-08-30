import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }){

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    })

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        
        if (existingProduct) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
        }

        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateProductQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            const confirmDelete = window.confirm("Você realmente deseja remover este produto do carrinho?");
            if (!confirmDelete) {
                return; 
            }

            removeFromCart(productId);
            return;
        }

        const updatedCart = cart.map(item => 
            item.id === productId ? { ...item, quantity: Number(quantity) } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateProductQuantity, removeFromCart  }}>
            {children}
        </CartContext.Provider>
    )
}
export function useCart() {
    return useContext(CartContext);
}