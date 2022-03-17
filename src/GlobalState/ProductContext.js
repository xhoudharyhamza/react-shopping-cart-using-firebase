import React, { useReducer, createContext, useEffect } from "react";
import Reducer from "./Reducer";
// set initial state for all components
let initialState = {
  cart: [],
  products: [],
};
// create context
let productsContext = createContext();
export default function ProductContext({ children }) {
  // useReducer hook to manage state of all the components
  const [state, dispatch] = useReducer(Reducer, initialState);
  // request API to get dummy products
  let getProducts = async () => {
    let url = "https://fakestoreapi.com/products";
    let data = await fetch(url);
    let parseData = await data.json();
    // dispatch action to update the state 
    dispatch({ type: "Add_Data", payload: {parseData} });
  };
  const addCart = (id) => {
    let cartItem = state.products.filter((element) => {
      return element.id == id;
    });
    dispatch({ type: "Add_To_Cart", payload: {...cartItem[0],qnt:1}} );
  };
  const removeCartItem = (id) => {
    let cartItem= state.cart.filter((element)=>{
      return element.id!=id
    })
    dispatch({type:'Remove_Cart_Item', payload: cartItem})
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <productsContext.Provider
        value={{
          products: state.products,
          addCart,
          cartItems: state.cart,
          removeCartItem,
        }}
      >
        {children}
      </productsContext.Provider>
    </>
  );
}
export { productsContext };
