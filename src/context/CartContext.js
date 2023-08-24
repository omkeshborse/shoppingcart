import { createContext, useContext } from "react";

const initialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(initialState);

export const CartProvider = ({ children}) => {
    const value = {
        total : 550 ,
    }
  return (
    <cartContext.Provider value={value}>
        {children}
    </cartContext.Provider>
  );
};


export const useCart =() =>{
    const context = useContext(cartContext) ;
    return context ;
}