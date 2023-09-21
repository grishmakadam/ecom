import React, { useContext, useState } from "react";
import classes from "../styles/product.module.css";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { cart } = useCart();
    const navigate=useNavigate()

  return (
    <div className={classes.header}>
      <h3>SmartPhones</h3>
      <div className={classes.cart} onClick={()=>navigate("/cart")}>
        <h3>Cart</h3>
        {cart.items.length != 0 && <p>({cart.items.length})</p>}
      </div>
    </div>
  );
};

export default Navbar;
