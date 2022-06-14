// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJVViHUwJnjcEqrZrdwkmKSZuow6bYwe0",
    authDomain: "house-marketplace-app-5385d.firebaseapp.com",
    projectId: "house-marketplace-app-5385d",
    storageBucket: "house-marketplace-app-5385d.appspot.com",
    messagingSenderId: "828032692337",
    appId: "1:828032692337:web:9d0dc346c8de5b2a662bd0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()