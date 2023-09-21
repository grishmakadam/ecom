// CartContext.js
import React, { createContext, useContext, useEffect, useReducer } from "react";

// Define the initial cart state
const initialState = {
  items: [],
};

// Create the cart context
const CartContext = createContext();

// Cart reducer to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product is already in the cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedItems = [...state.items];
        console.log("hii");

        console.log(updatedItems);

        updatedItems[existingItemIndex].quantity += 1;
        console.log("hello");

        console.log(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));

        return { ...state, items: updatedItems };
      } else {
        // If the item is not in the cart, add it
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.items, { ...action.payload, quantity: 1 }])
        );

        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      // Remove the item from the cart
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItems = [...state.items];

      if (updatedItems[existingItem].quantity > 1) {
        updatedItems[existingItem].quantity -= 1;
      } else {
        updatedItems.splice(existingItem, 1);
      }

      localStorage.setItem("cart", JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };

    case "INITIALISE_CART":
      localStorage.setItem("cart", JSON.stringify(action.payload));

      return { ...state, items: [...action.payload] };
    case "CLEAR_CART":
      localStorage.setItem("cart", JSON.stringify([]));

      return { ...state, items: [] };
    default:
      return state;
  }
};

// CartProvider component
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log(savedCart);
    if (JSON.parse(savedCart)) {
      dispatch({ type: "CLEAR_CART" });
      dispatch({ type: "INITIALISE_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
