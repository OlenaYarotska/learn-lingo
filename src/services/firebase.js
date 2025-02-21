import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuMpZB4HMu6ms-C6GrvwJ6rdnQvL1Cmj4",
  authDomain: "learn-lingo-1dd40.firebaseapp.com",
  projectId: "learn-lingo-1dd40",
  storageBucket: "learn-lingo-1dd40.firebasestorage.app",
  messagingSenderId: "872880325874",
  appId: "1:872880325874:web:d926bcb30811a92c11fc6b",
  measurementId: "G-ZR4M782YNZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);