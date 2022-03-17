import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../GlobalState/ProductContext";

export default function Footer() {
  // destructuring of context hook 
  let { products, cartItems, totalPrice, addCart, removeCartItem } =
    useContext(productsContext);
  return (
    <>
    {/* use turnory operator to fixed footer if products are not fetched from api */}
      <footer className={`${cartItems.length===0?"footer": null}`} style={ products.length===0 ? { position:"fixed", bottom:0, width:"100%"} : {position:"relative"} }>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="social-media">
                <a href="" target="_blank" className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" target="_blank" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" target="_blank" className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="" target="_blank" className="github">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              <span>
                <i className="far fa-copyright"></i>:
              </span>
              2021 ShopNow
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
