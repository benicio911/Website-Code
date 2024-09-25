// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Ensure the CSS path is correct
import { ReactComponent as YourSvg } from '../assets/WMB_EGOFX_Word_Mark_Blk.svg';
import { useCart } from './CartContext'; // Adjust the path as necessary
import Cart from './Cart'; // Ensure Cart component is correctly imported

const Navbar = ({ className }) => {
    const result = useCart();
    const [navVisible, setNavVisible] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const { cart } = useCart();
    const location = useLocation();

  // Toggle the blur effect based on navVisible
  useEffect(() => {
      // Assuming your main content has a consistent class or ID you can target
      const mainContent = document.querySelector('.main-content');
      if (navVisible) {
          mainContent.classList.add('blur-effect');
      } else {
          mainContent.classList.remove('blur-effect');
      }
  }, [navVisible]);

  const toggleNav = () => {
      setNavVisible(!navVisible);
  };

  const isHyperAPage = location.pathname === '/hyper-a';
  const logoColor = isHyperAPage ? 'black' : 'white'; 

  // Function to close the navbar when a link is clicked
  const handleNavLinkClick = () => {
    if (navVisible) {
        setNavVisible(false);
    }
};

const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);


    return (
        <div className={`navbar ${className}`}>
            <button className="hamburger-icon" onClick={toggleNav}>
                <span style={{ backgroundColor: isHyperAPage ? 'black' : '' }}>-</span>
                <span style={{ backgroundColor: isHyperAPage ? 'black' : '' }}>-</span>
                <span style={{ backgroundColor: isHyperAPage ? 'black' : '' }}>-</span>
            </button>
            <Link to="/" className="logo">
                <YourSvg style={{ color: logoColor, width: '80%', padding: '5%' }}/>
            </Link>
            <ul className={`nav-links ${navVisible ? 'show' : ''}`}>
                <li className="link"><Link to="/" onClick={handleNavLinkClick} style={{ color: isHyperAPage ? 'black' : '' }}>ABOUT</Link></li>
                <li className="link"><Link to="/hyper-a" onClick={handleNavLinkClick} style={{ color: isHyperAPage ? 'black' : '' }}>EGO</Link></li>
                <li className="link"><Link to="/products" onClick={handleNavLinkClick} style={{ color: isHyperAPage ? 'black' : '' }}>PRODUCTS</Link></li>
                <li className="link sign-in-button">
                    {/* Link to Sign In page directly */}
                    <Link to="/AuthForm" onClick={handleNavLinkClick} style={{ color: isHyperAPage ? 'black' : '' }}
                    
                    >SIGN IN</Link>
                </li>
                <li className="link cart-icon" onClick={() => setCartVisible(!cartVisible)}>
                    🛒 <span className="cart-count">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </li>
            </ul>
            {cartVisible && (
                <div className="cart-popup">
                <Cart />
                <button className="checkout-button">Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;