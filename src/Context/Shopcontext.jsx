import React, { createContext } from 'react';
import allcollections from '../Product_all_shop';

export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
  const context = { allcollections }; // Provide `allcollections` here.
  return (
    <Shopcontext.Provider value={context}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
