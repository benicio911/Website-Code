import { createContext, useState, useContext } from 'react';

// Create CartContext
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy consumption of the cart context
export const useCart = () => useContext(CartContext);

export default CartContext;