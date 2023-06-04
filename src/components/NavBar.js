import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/userSlice";
export default function NavBar() {
  let dispatch = useDispatch()
  let { cart } = useSelector((state) => {
    return state.products
  })
  let { user } = useSelector((state) => {
    return state.user
  })
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
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
                <NavLink className="nav-link" aria-current="page" exact to="/" >
                  Home
                </NavLink>
              </li>
              {user && <li className="nav-item">
                <a className="nav-link" aria-current="page"  >
                  {user.email}
                </a>
              </li>}
              {!user ? <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/login">
                  Login
                </NavLink>
              </li> : <li className="nav-item">
                <a className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => { dispatch(logoutUser()) }}>
                  Logout
                </a>              </li>}
              <li className="nav-item">
                <NavLink className="nav-link" to="cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">{cart.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
