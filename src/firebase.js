// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGefEPR5Yfftv3avcZHKUWyOVjLm8ozlQ",
  authDomain: "react-firebase-todo-87a7e.firebaseapp.com",
  projectId: "react-firebase-todo-87a7e",
  storageBucket: "react-firebase-todo-87a7e.appspot.com",
  messagingSenderId: "834661015992",
  appId: "1:834661015992:web:ae3c73f76fb648a730af4d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, db, doc, getDoc, setDoc };
