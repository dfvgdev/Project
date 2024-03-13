import React, { createContext, useState } from "react";
import { PRODUCTS } from "../src/Products";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0; // Initialize cart items to 0
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);


  const getTotalCartAmount = ()=> {
    let totalamount = 0;
    for (const item in cartItems){
      if(cartItems[item] >0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalamount += cartItems[item] * itemInfo.price; 
      }
    }

    return totalamount
  }
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newamount,itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newamount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount,getTotalCartAmount};
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
