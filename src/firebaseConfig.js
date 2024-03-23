import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI5XpODFZY9f1qjeWJIRyebMeHs0657cQ",
  authDomain: "proyecto-react-4d19d.firebaseapp.com",
  projectId: "proyecto-react-4d19d",
  storageBucket: "proyecto-react-4d19d.appspot.com",
  messagingSenderId: "318722013129",
  appId: "1:318722013129:web:769b6c563a6627a1f29a18"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )