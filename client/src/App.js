import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/ProductCatalog";
import classes from "./styles/product.module.css";
import Navbar from "./components/Navbar";
import { CartProvider, useCart } from "./context/cartContext";
import DisplayCart from "./components/DisplayCart";
import { useEffect } from "react";

function App() {
 
  return (
    <CartProvider>
      <div className={classes.container}>
        <Router>
          <Navbar />

          <Routes>
            <Route element={<ProductCatalog />} path="/products"></Route>
            <Route element={<DisplayCart />} path="/cart"></Route>
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
