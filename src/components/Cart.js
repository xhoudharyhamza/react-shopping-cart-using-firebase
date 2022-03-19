import React, { useContext } from "react";
import { productsContext } from "../GlobalState/ProductContext";
export default function Cart() {
  // destructuring of useContext hook
  let {
    products,
    cartItems,
    addCart,
    removeCartItem,
    addQuantity,
    decrementQuantity,
  } = useContext(productsContext);
  // use array reduce method calculate total price of products in cart items
  let totalPrice = cartItems.reduce(
    (value, current) => value + current.price * current.qnt,
    0
  );
  return (
    <>
      <div className="container">
        {cartItems.map((item, index) => {
          return (
            <div
              className="row my-2"
              key={index}
              style={{ border: "1px solid #9a9c9e", padding: "10px 20px" }}
            >
              <div className="col-md-5 col-sm-12 text-center">
                <img src={item.image} alt="image" />
              </div>
              <div className="col-md-7 col-sm-12" style={{ marginTop: "15px" }}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <p style={{ fontWeight: "bold" }}>
                  {item.qnt} * {item.price}={item.qnt * item.price}{" "}
                </p>
                <div className="item-quantity">
                  <button
                    onClick={() => {
                      addQuantity(item.id);
                    }}
                  >
                    +
                  </button>
                  <p>{item.qnt}</p>
                  <button
                    onClick={() => {
                      decrementQuantity(item.id);
                    }}
                    style={{ display: item.qnt == 1 ? "none" : "block" }}
                  >
                    -
                  </button>
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
                  <b>Total: ${totalPrice}</b>
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
