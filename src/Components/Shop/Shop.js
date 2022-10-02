import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Order Summary Section
  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);

    // save to LocalStorage
    let shoppingCart = {};

    // get the shopping cart
    const storedCart = localStorage.getItem("Shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    // quantity
    const quantity = shoppingCart[product.id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[product.id] = newQuantity;
    } else {
      shoppingCart[product.id] = 1;
    }
    // set the shopping cart
    localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));
  };

  // Show LocalStorage Data in Order Summary

  const getStoredCart = () => {
    let shoppingCart = {};
    // get the shopping cart
    const storedCart = localStorage.getItem("Shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    // console.log(storedCart);
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleRemoveFromCart = () => {
    setCart([]);
    localStorage.removeItem("Shopping-cart");
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
