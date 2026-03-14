import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM_UuKWEPWGjPPCOMFUBocSqWBlT5HqOw",
  authDomain: "aiagency-e099f.firebaseapp.com",
  projectId: "aiagency-e099f",
  storageBucket: "aiagency-e099f.firebasestorage.app",
  messagingSenderId: "249066928304",
  appId: "1:249066928304:web:2a9d5936c28500969aa375",
  measurementId: "G-7G12SKKLK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithPopup, signOut, onAuthStateChanged };
export type { User };
