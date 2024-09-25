// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState, useContext } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePageComposite';
import HyperAPage from './components/HyperAPage';
import ProductsPage from './components/ProductsPage';
import FadeTransition from './components/FadeTransition';
import { CartProvider } from './components/CartContext';  // Ensure the path to CartContext is correct
import AuthForm from './components/AuthForm.js'; // Import SignIn
import { auth } from './firebase-config.js';
import './App.css';

// Create ThemeContext
const ThemeContext = createContext();

// Create a custom hook for easy theme context consumption
export const useTheme = () => useContext(ThemeContext);

// Create CartContext
const CartContext = createContext();

// Create a custom hook for easy cart context consumption
export const useCart = () => useContext(CartContext);


const AppContent = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  // Optional: Trigger fade-in on every route change
  useEffect(() => {
    // Trigger any side effect that indicates a route change
  }, [location]);

  return (
    <div className="main-content">
    <CartContext.Provider value={{ cart, setCart }}>
    <Switch>
      <Route path="/AuthForm" key={location.pathname}>
        <FadeTransition><AuthForm /></FadeTransition>
      </Route>
      <Route path="/products" key={location.pathname}>
        <FadeTransition><ProductsPage /></FadeTransition>
      </Route>
      <Route path="/hyper-a" key={location.pathname}>
        <FadeTransition><HyperAPage /></FadeTransition>
      </Route>
      <Route path="/" exact key={location.pathname}>
        <FadeTransition><HomePage /></FadeTransition>
      </Route>
      {/* Other routes as needed */}
    </Switch>
    </CartContext.Provider>
    </div>
  );
};

const useThemeBasedOnRoute = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    // Example theme change based on route
    switch (location.pathname) {
      case '/hyper-a':
        setTheme('hyperATheme');
        break;
      case '/products':
        setTheme('productsTheme');
        break;
      // Add more cases as needed
      default:
        setTheme('default');
    }
  }, [location]);

  return theme;
};

// Context setup
const NavbarContext = React.createContext();

// A hook for easy access to the context
export function useNavbar() {
  return useContext(NavbarContext);
}


function App() {
  const [cart, setCart] = useState([]);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState('default');
  const toggleNavbar = () => setNavbarOpen(!isNavbarOpen);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User is signed in');
      } else {
        // User is signed out.
        console.log('User is signed out');
      }
    });

    return unsubscribe; // Make sure we un-subscribe on unmount
  }, []);

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartProvider> 
      <div className="App">
      <Navbar logoColor="#FFFFFF" />
        <AppContent />
      </div>
      </CartProvider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;