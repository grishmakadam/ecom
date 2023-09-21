import React, { useState } from 'react'
import classes from "../styles/product.module.css";

const Navbar = () => {
    const [cart,setCart]=useState([])
  return (
    <div className={classes.header}>
    <h3>SmartPhones</h3>
    <div className={classes.cart}>
      <h3>Cart</h3>
      {cart.length != 0 && <p>({cart.length})</p>}
    </div>
  </div>  )
}

export default Navbar