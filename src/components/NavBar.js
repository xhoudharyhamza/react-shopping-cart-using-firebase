import React,{useContext} from "react";
import {NavLink} from 'react-router-dom';
import { productsContext } from "../GlobalState/ProductContext";
export default function NavBar() {
  let { addCart, cartItems, products,removeCartItem } = useContext(productsContext);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{paddingLeft:'50px', paddingRight:'50px'}}>
        <div className="container-fluid ">
          <a className="navbar-brand logo " href="#">
            ShopNow
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu-items ">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/" activeStyle={{borderBottom:'2px solid red'}}>
                  Home
                </NavLink>
              </li>
			  <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login" activeStyle={{borderBottom:'2px solid red'}}>
                  Login
                </NavLink>
              </li>
			  <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/signup" activeStyle={{borderBottom:'2px solid red'}}>
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="cart" activeStyle={{borderBottom:'2px solid red'}}>
                <i className="fas fa-shopping-cart"></i>
                <span className="badge rounded-pill badge-notification bg-danger">{cartItems.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
