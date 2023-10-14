import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const db = getFirestore(app);
