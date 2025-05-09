import React, { useState } from 'react';
import './cart.css';
import p1 from './p1.jpg';
import mouse from './mouse.webp';
import laptop from './laptop.webp';

function Cart() {
  const products = [
    { name: "Laptop", price: 30000, image: p1 },
    { name: "Mouse", price: 5000, image: mouse },
    { name: "Keyboard", price: 10000, image: laptop }
  ];

  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + delta);
    setQuantities(newQuantities);
  };

  const total = quantities.reduce(
    (sum, qty, i) => sum + qty * products[i].price,
    0
  );

  return (
    <div className="cart-app">
      <h1 className="cart-title">🛒 Shopping Cart</h1>
      <div className="cart-container">
        {products.map((product, index) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <input
                  type="text"
                  readOnly
                  value={quantities[index]}
                />
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
              <p className="subtotal">Subtotal: ₹{quantities[index] * product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-section">
        <h2>Total: ₹{total}</h2>
        <button className="clear-btn" onClick={() => setQuantities(Array(products.length).fill(0))}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
