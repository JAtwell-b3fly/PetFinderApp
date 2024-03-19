import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgbBNVDhc4GcJmOOGmbru7XN9n8ok9I1Q",
  authDomain: "petfinder-c0898.firebaseapp.com",
  projectId: "petfinder-c0898",
  storageBucket: "petfinder-c0898.appspot.com",
  messagingSenderId: "831040355868",
  appId: "1:831040355868:web:0c8887c2ef02e042d3e9d9",
  measurementId: "G-D3K64NVC56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};