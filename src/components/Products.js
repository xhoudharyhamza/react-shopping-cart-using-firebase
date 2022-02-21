import React, { useContext } from "react";
import { productsContext } from "../GlobalState/ProductContext";
import ProductsList from "./ProductsList";
export default function Products() {
  // destructuring of useContext hook
  let { products, cartItems, totalPrice, addCart, removeCartItem } =
  useContext(productsContext);
  return (
    <>
      <div className="container">
        <div className="row">
          {/* use turnory operator to show Loading... on screen when products are loading */}
          {products.length === 0?<h3 className="text-center my-3">Loading...</h3>:null}
          {/* use array map method to map each product  */}
          {products.map((product, index) => {
            return (
              <ProductsList
                addCart={addCart}
                id={product.id}
                price={product.price}
                title={product.title}
                img={product.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
