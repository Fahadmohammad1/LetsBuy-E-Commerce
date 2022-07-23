// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlvyzCTXlFmodWC4QxVxgHNHnw309dbFU",
  authDomain: "letsbuy-e-commerce.firebaseapp.com",
  projectId: "letsbuy-e-commerce",
  storageBucket: "letsbuy-e-commerce.appspot.com",
  messagingSenderId: "948067647822",
  appId: "1:948067647822:web:f1125da0b12885c5a01e1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
