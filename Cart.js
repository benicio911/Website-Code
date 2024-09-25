import React from 'react';
import { useCart } from './CartContext'; // Ensure the path is correct
import './Cart.css'; // Link to the CSS file

const Cart = () => {
  const { cart, setCart } = useCart(); // Correctly calling the useCart hook

  const handleRemoveFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  };

  const handleChangeQuantity = (productId, amount) => {
    const newCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    });
    setCart(newCart);
  };

  if (!cart.length) return <p className="empty-cart">Your cart is empty</p>;

  return (
    <div className="cart-container">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3 className="item-name">{item.name}</h3>
          <div className="item-details">
            <p className="item-quantity">Qty: {item.quantity}</p>
            <div className="buttons">
              <button className="change-quantity" onClick={() => handleChangeQuantity(item.id, 1)}>+</button>
              <button className="change-quantity" onClick={() => handleChangeQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
              <button className="remove-item" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;