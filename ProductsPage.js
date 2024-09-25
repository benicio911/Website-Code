// ProductsPage.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ProductsPage.css';
import Cart from './Cart'; // Assuming Cart component is in the same directory
import CheckoutForm from './CheckoutForm'; // Assuming CheckoutForm component is in the same directory
import { useCart } from './CartContext'; // Correct import of the context
import Navbar from './Navbar';
import Kitsu from '../assets/Kitsu_icon.png'
import Shark from '../assets/Shark_icon.png'
import Plume from '../assets/Plume_icon.png'
import Tiger from '../assets/Tiger_icon.png'
import Sooty from '../assets/Sooty_icon.png'
import Drake from '../assets/Drake_icon.png'
import Panda from '../assets/Panda_icon.png'
import Raven from '../assets/Raven_icon.png'
import Gekko from '../assets/Gekko_icon.png'
import Crane from '../assets/Crane_icon.png'

// Mock Data
const mockProducts = [
  {
    id: 1,
    name: 'Gekko',
    description: 'Inspired by the adaptability and efficiency symbolized by a gekko, this trading method leverages the SuperTrend indicator, which is particularly effective in trending markets. The SuperTrend indicator combines price momentum and volatility to create a dynamic line that tracks the current trend. Trades are initiated based on the position of the price relative to this line.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Gekko // Replace with actual image source
  },
  {
    id: 2,
    name: 'Kitsu',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Kitsu // Replace with actual image source
  },
  {
    id: 3,
    name: 'Panda',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Panda // Replace with actual image source
  },
  {
    id: 4,
    name: 'Drake',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Drake // Replace with actual image source
  },
  {
    id: 5,
    name: 'Shark',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Shark // Replace with actual image source
  },
  {
    id: 6,
    name: 'Plume',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Plume // Replace with actual image source
  },
  {
    id: 7,
    name: 'Tiger',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Tiger // Replace with actual image source
  },
  {
    id: 8,
    name: 'Sooty',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Sooty // Replace with actual image source
  },
  {
    id: 9,
    name: 'Raven',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Raven // Replace with actual image source
  },
  {
    id: 10,
    name: 'Crane',
    description: 'An AI trading bot with a sleek design and intuitive user interface.',
    videoSrc: 'https://example.com/kitsu-demo-video', // Replace with actual video source
    imageSrc: Crane // Replace with actual image source
  },
  
  // ... Add more mock products here
];

const ProductsPage = () => {
  const [products] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const { cart, setCart } = useCart();

  const isGekkoInCart = cart.some(item => item.id === 1); // Assuming Gekko's ID is 1

  const handleLogoClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct.id === 1 && !isGekkoInCart) { // Only allow adding Gekko if it's not already in the cart
      setCart(currentCart => [...currentCart, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const lastSent = localStorage.getItem('lastSentEmailTimestamp');
    const currentTime = new Date().getTime();
    const oneHour = 1; // One hour in milliseconds

    if (lastSent && currentTime - parseInt(lastSent) < oneHour) {
      alert("You can only send one request per hour. Please try again later.");
      return;
    }

    emailjs.sendForm('service_rsyoz6b', 'template_o6z795p', e.target, 'TCPMLsPEKzPhATSjF')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          localStorage.setItem('lastSentEmailTimestamp', currentTime.toString());
      }, (error) => {
          console.log('Failed to send email.', error.text);
      });
};

  return (
    <div>
      <div className="products-header">
        <h1>PRODUCTS</h1>
      </div>
      <div className="products-container">
        <div className="product-demo-container">
          <div className="product-info-container">
            <div className="product-card">
              <h1>{selectedProduct.name}</h1>
              <p>{selectedProduct.description}</p>
              <div className="logo-container">
                <img src={selectedProduct.imageSrc} alt={selectedProduct.name} className="product-logo" />
              </div>
            </div>
            <button
                className="add-to-cart-button"
                onClick={handleAddToCart}
                disabled={selectedProduct.id !== 1 || isGekkoInCart} // Disable the button for non-Gekko products or if Gekko is already in cart
              >
                ADD TO CART
              </button>
          </div>
          <div className="video-container">
            <iframe
              title="Video Demonstration"
              src={selectedProduct.videoSrc}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="custom-bot-container">
          <form className="custom-bot-form" onSubmit={sendEmail}>
            <input placeholder='EMAIL' name="user_email" required></input>
            <p>If our current models are not what you seek. Describe what you are seeking to have built below and we will reach out to you with a quote.</p>
            <textarea name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="logo-carousel">
          {products.map((product) => (
            <button
              key={product.id}
              className={`logo-car ${selectedProduct.id === product.id ? 'active' : ''}`}
              onClick={() => handleLogoClick(product)}
            >
              <img src={product.imageSrc} alt={product.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;