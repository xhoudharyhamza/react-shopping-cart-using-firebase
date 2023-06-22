import React from "react";
import { addProductsToCart } from "../redux/slices/productsSlice";
import { useDispatch } from "react-redux";
export default function ProductsList({ product }) {
  let dispatch = useDispatch()
  return (
    <div className="col-md-6 col-lg-3 col-sm-12 my-1">
      <div className="card product">
        <img className="card-img-top" src={product.images[0]} alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title">{product.title}</h6>
          <p><b>${product.price}</b></p>
          <button className="btn btn-primary" onClick={() => { dispatch(addProductsToCart(product.id)) }}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
