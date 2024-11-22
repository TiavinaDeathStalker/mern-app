// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-fb29c.firebaseapp.com",
  projectId: "mern-app-fb29c",
  storageBucket: "mern-app-fb29c.firebasestorage.app",
  messagingSenderId: "176509155671",
  appId: "1:176509155671:web:59de7d25570c3543ba6612"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);