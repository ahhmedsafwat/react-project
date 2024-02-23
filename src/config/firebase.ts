// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWvOmczBq9Wnb7zq87tUgvj9Kc_Tl6H70",
  authDomain: "fir-project-10062.firebaseapp.com",
  projectId: "fir-project-10062",
  storageBucket: "fir-project-10062.appspot.com",
  messagingSenderId: "793343666475",
  appId: "1:793343666475:web:155465e0bed1c60e113d6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
