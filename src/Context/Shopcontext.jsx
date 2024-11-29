import React, { createContext, useState } from 'react';
import allcollections from '../Product_all_shop';

export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) => {
                    if (item.id === productId) {
                        if (item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return null;
                    }
                    return item;
                })
                .filter((item) => item !== null)
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
    };

    const clearCart = () => {
        setCart([]); // Assuming `setCart` is used to manage the cart state
    };

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };
    return (
        <Shopcontext.Provider value={{ allcollections, cart, addToCart, removeFromCart, calculateTotal, clearCart, toggleCart }}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
