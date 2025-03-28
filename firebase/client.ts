// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8FfLSB85GG0jRRuPmg6eCQ802VP9sSq4",
  authDomain: "PrepAI-f6a6b.firebaseapp.com",
  projectId: "PrepAI-f6a6b",
  storageBucket: "PrepAI-f6a6b.firebasestorage.app",
  messagingSenderId: "757726515758",
  appId: "1:757726515758:web:ffd4b2d777f3c7b49045bf",
  measurementId: "G-6B3E5SVL6G"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);