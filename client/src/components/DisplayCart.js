import React, { useEffect } from "react";
import { useCart } from "../context/cartContext";
import classes from "../styles/product.module.css";

const DisplayCart = () => {
  const { cart, dispatch } = useCart();

  const handleCart = (type, item) => {
    dispatch({ type: type, payload: item });
  };
  return (
    <div className={classes.products}>
      {cart.items?.map((item) => (
        <div key={item.id} className={classes.product}>
          <img src={item.images[0]} height="200px" width="200px" />
          <div className={classes.details}>
            <h3>{item.title}</h3>
            <h5>${item.price}</h5>
            <p>{item.description}</p>
          </div>
          <div className={classes.cartButton}>
            <div
              className={classes.box}
              onClick={() => handleCart("REMOVE_FROM_CART", item)}
            >
              -
            </div>
            <div className={classes.box}>{item.quantity}</div>
            <div
              className={classes.box}
              onClick={() => handleCart("ADD_TO_CART", item)}
            >
              +
            </div>
          </div>
        </div>
      ))}
          
      {cart.items.length == 0 && <p>Cart is empty</p>}
    </div>
  );
};

export default DisplayCart;
