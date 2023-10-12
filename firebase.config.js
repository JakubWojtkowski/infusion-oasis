// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "infusion-oasis.firebaseapp.com",
  projectId: "infusion-oasis",
  storageBucket: "infusion-oasis.appspot.com",
  messagingSenderId: "166843945074",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-CQE01K6L4Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
