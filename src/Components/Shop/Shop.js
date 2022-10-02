import React, { useState } from "react";
import { useEffect } from "react";
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
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  //   console.log(cart);
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
        <h1>add to cart</h1>
        <h3>Selected Items: {cart.length}</h3>
      </div>
    </div>
  );
};

export default Shop;
