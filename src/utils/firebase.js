// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCxWoirKDNFTKQn3_mcwNyknhx8j1CZAI",
  authDomain: "netflix011025.firebaseapp.com",
  projectId: "netflix011025",
  storageBucket: "netflix011025.firebasestorage.app",
  messagingSenderId: "1081612281998",
  appId: "1:1081612281998:web:2d24fcabc7a3a143c0c1df",
  measurementId: "G-13SC0ZSRX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
