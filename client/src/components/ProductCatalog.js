import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import classes from "../styles/product.module.css";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const { dispatch } = useCart()
  const getProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (ex) {
      console.log(ex.message);
    }
  };
  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  return (
    <div className={classes.products}>
      {products?.map((item) => (
        <div key={item.id} className={classes.product}>
          <img src={item.images[0]} height="200px" width="200px" />
          <div className={classes.details}>
            <h3>{item.title}</h3>
            <h5>${item.price}</h5>
            <p>{item.description}</p>
          </div>
          <button className={classes.button} onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
