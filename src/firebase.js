// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNVWNnh4wW3hbTFCOwtMZKpyz5e5plAGY",
    authDomain: "authsenior.firebaseapp.com",
    projectId: "authsenior",
    storageBucket: "authsenior.appspot.com",
    messagingSenderId: "306055532256",
    appId: "1:306055532256:web:8fe024478fd6c66d094a85",
    measurementId: "G-89XDC8F7VK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);
