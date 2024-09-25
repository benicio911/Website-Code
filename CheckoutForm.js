import React, { useState } from 'react';

const CheckoutForm = () => {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckout = (event) => {
    event.preventDefault();
    alert(`Order placed for ${email} with shipping address: ${address}`);
    // Here you would typically handle the checkout logic, e.g., send data to the backend.
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;