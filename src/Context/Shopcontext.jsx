import React, { createContext, useState } from 'react';
import allcollections from '../Product_all_shop';

export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
  const [cart, setCart] = useState([]);

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
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          // Reduce the quantity if it's more than 1
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // If quantity is 1, return a flag to indicate removal
          return null;
        }
        return item;
      }).filter(item => item !== null); // Remove items marked as null
    });
  };
  
  
  return (
    <Shopcontext.Provider value={{ allcollections, cart, addToCart, removeFromCart }}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
