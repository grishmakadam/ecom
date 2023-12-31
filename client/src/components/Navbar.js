import React, { useContext, useState } from "react";
import classes from "../styles/product.module.css";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart,dispatch } = useCart();
  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <h3 onClick={()=>navigate("/products")} style={{cursor:"pointer"}}>SmartPhones</h3>
      <div style={{ display: "flex" }}>
        <div className={classes.cart} onClick={() => navigate("/cart")}>
          <h3>Cart</h3>
          {cart.items.length != 0 && <p>({cart.items.length})</p>}
        </div>

        {cart.items.length != 0 && (
          <div className={classes.cart} onClick={() => dispatch({type:"CLEAR_CART"})}>
            <h3>Clear cart</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
