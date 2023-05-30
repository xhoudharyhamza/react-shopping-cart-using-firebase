import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import {  Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
