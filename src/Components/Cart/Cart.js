import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <div>
        <button onClick={() => handleRemoveFromCart(cart)} className="clr-btn">
          Clear Cart
        </button>
        <button className="review-btn">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
