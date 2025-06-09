// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyCi7llhLv9SeN0EOZENqoGmw9Ui-Rg0Z2E",
  authDomain: "chessmate-65caf.firebaseapp.com",
  projectId: "chessmate-65caf",
  storageBucket: "chessmate-65caf.firebasestorage.app",
  messagingSenderId: "317848382359",
  appId: "1:317848382359:web:3c98c9deaa6b0db59132d2",
  measurementId: "G-J9G22W1RTP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);    

export { auth };             