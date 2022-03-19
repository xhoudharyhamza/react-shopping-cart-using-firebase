import React from "react";

export default function ProductsList(props) {
  let { addCart, id, price, title, img } = props;
  let productTitle = title.slice(0, 35);
  return (
    <>
      <div className="col-md-3 col-sm-12 my-3 product-item">
        <div className="card">
          <img src={img} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{productTitle}...</h5>
            <b>
              <p className="card-text">${price}</p>
            </b>
            <p className="card-text"></p>
            <button
              className="btn btn-primary add-cart-btn"
              onClick={() => {
                addCart(id);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
