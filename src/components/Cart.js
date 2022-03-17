import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../GlobalState/ProductContext";
export default function Cart() {
  // use state hook to calculate total price of products in cart item
  const [price, setPrice] = useState(0);
  // destructuring of useContext hook
  let { products, cartItems, totalPrice, addCart, removeCartItem } =
    useContext(productsContext);
    // use array reduce method calculate total price of products in cart items
  useEffect(() => {
    setPrice(cartItems.reduce((value, current) => value + current.price, 0));
  }, [cartItems]);
  return (
    <>
      <div className="container">
        {cartItems.map((item) => {
          return (
            <div
              className="row my-2"
              style={{ border: "1px solid #9a9c9e", padding: "10px 20px" }}
            >
              <div className="col-md-5 col-sm-12 text-center">
                <img src={item.image} alt="image" />
              </div>
              <div className="col-md-7 col-sm-12" style={{ marginTop: "15px" }}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <p style={{ fontWeight: "bold" }}>${item.price}</p>
                <div className="item-quantity">
                  <button>+</button>
                  <p>{item.qnt}</p>
                  <button>-</button>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeCartItem(item.id);
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}

        {cartItems.length != 0 ? (
          <>
            <div className="row my-2">
              <hr />
              <div className="col-md-6 col-sm-12">
                <p>
                  <b>Total: ${price}</b>
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <button className="btn btn-primary">Safe CheckOut</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
