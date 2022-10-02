import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, ratings } = product;
  //   console.log(product);

  return (
    <div className="shop-card">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p>Ratting: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
