// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyALG1jV96Qb-fzBnOeWbfSBQKcK4KUfBAg",
  authDomain: "testimoni-dbd80.firebaseapp.com",
  projectId: "testimoni-dbd80",
  storageBucket: "testimoni-dbd80.appspot.com",
  messagingSenderId: "832815585104",
  appId: "1:832815585104:web:65322033abab495120be55",


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();