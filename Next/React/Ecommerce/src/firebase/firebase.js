import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged,  signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdHKac5uMxYgxcxNTGS2fv6lPkhTEvM9g",
  authDomain: "react-projects-442a7.firebaseapp.com",
  projectId: "react-projects-442a7",
  storageBucket: "react-projects-442a7.appspot.com",
  messagingSenderId: "80442881901",
  appId: "1:80442881901:web:39c6bb5147657fcb7d8c64"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export{
    getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup
}