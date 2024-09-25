import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };