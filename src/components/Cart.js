import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart } from "../redux/slices/productsSlice";
export default function Cart() {
  let dispatch = useDispatch()
  const { cart } = useSelector((state) => {
    return state.products;
  });

  return (
    <div className="shopping-cart cart mt-3 container">
      {cart.length > 0 ? <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartProduct, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    className="card-img-top"
                    src={cartProduct.image}
                    alt="Product Image"
                  />
                </td>
                <td>{cartProduct.title}</td>
                <td>
                  <strong>${cartProduct.price}</strong>
                </td>
                <td>{cartProduct.rating.rate}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => { dispatch(deleteProductFromCart(index)) }}>Delete Product</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        : <h5 className="text-center mt-5">Shopping Cart is Empty!</h5>}
    </div>
  );
}
