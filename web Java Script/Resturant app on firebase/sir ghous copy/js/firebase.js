import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIiSN2x0cwLWEWdV9AdSS-SRBnd5h6UPA",
    authDomain: "resturant-business-5eb66.firebaseapp.com",
    projectId: "resturant-business-5eb66",
    storageBucket: "resturant-business-5eb66.appspot.com",
    messagingSenderId: "70861133889",
    appId: "1:70861133889:web:300ee323bd964b64f14ec0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
};