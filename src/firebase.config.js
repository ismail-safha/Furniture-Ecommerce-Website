import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBRhPkn8AdjYCXdDMbj3gwHVur0Yjau4Zo",
  authDomain: "maltishop-ecom.firebaseapp.com",
  projectId: "maltishop-ecom",
  storageBucket: "maltishop-ecom.appspot.com",
  messagingSenderId: "480155976589",
  appId: "1:480155976589:web:2475e55df8542bfa96f3c4",
  measurementId: "G-QLZ4P83QS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
