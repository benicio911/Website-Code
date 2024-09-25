import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './SignIn.css';

const firebaseConfig = {
    apiKey: "AIzaSyCUZDrT7RMdmI-uP4vY4jvXOX6TLDb-CaI",
    authDomain: "ego-fx.firebaseapp.com",
    databaseURL: "https://ego-fx-default-rtdb.firebaseio.com",
    projectId: "ego-fx",
    storageBucket: "ego-fx.appspot.com",
    messagingSenderId: "210646883140",
    appId: "1:210646883140:web:c9ba4ba1afd27dad7e5511",
    measurementId: "G-FT222WS2P1"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('Initial message for testing visibility');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setMessage(currentUser ? `Welcome, ${currentUser.email || currentUser.phoneNumber}` : 'Please sign in or sign up');
    });
    return () => unsubscribe();
  }, []);

  const handleAuthWithEmail = async () => {
    if (isSignUp) {
      // Handle sign-up logic
      if (!user) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.toLowerCase(), password);
          const { user } = userCredential;
          await updateProfile(user, {
            displayName: `${firstName} ${lastName}`
          });
          await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            phone,
            dob,
            email: email.toLowerCase(),  // Store email in lowercase
            password,
            is_logged_in: false  // Initialize is_logged_in as false
          });
          await sendEmailVerification(user);
          setMessage(`Welcome, ${user.email}! Please verify your email.`);
        } catch (error) {
          setMessage(`Failed to register: ${error.message}`);
        }
      } else {
        setMessage("You are already logged in.");
      }
    } else {
      // Handle sign-in logic
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.toLowerCase(), password);
        setMessage(`Welcome back, ${userCredential.user.email}!`);
      } catch (error) {
        setMessage(`Failed to sign in: ${error.message}`);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setMessage(`Welcome, ${result.user.email}!`);
    } catch (error) {
      setMessage(`Google sign-in error: ${error.message}`);
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setMessage('');
  };

  return (
    <div className="auth-container">
      <h1>{user ? 'Welcome' : 'Please Sign In or Sign Up'}</h1>
      <p>{message}</p>
      {!user ? (
        <>
          {isSignUp && (
            <>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" />
            </>
          )}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleAuthWithEmail}>{isSignUp ? 'Register' : 'Sign In'}</button>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={toggleSignUp}>{isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}</button>
        </>
      ) : (
        <button onClick={() => signOut(auth)}>Sign Out</button>
      )}
    </div>
  );
}

export default AuthForm;