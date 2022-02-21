import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductContext from "./GlobalState/ProductContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ProductContext>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer/>
      </ProductContext>
    </>
  );
}

export default App;
