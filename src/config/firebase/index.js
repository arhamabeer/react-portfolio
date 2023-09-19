// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT8R7Pnozq4ca1QUKY17sq21zNcR4H4zI",
  authDomain: "aaa-portfolio.firebaseapp.com",
  projectId: "aaa-portfolio",
  storageBucket: "aaa-portfolio.appspot.com",
  messagingSenderId: "710574990275",
  appId: "1:710574990275:web:81e9f3b60be77c032e9376",
  measurementId: "G-ZJYMN769P3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
