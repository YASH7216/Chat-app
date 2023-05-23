// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import{getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACRFwcKGSo4FLp62jqA2B-KCLMnKDN6S4",
  authDomain: "chat-app-fa97d.firebaseapp.com",
  projectId: "chat-app-fa97d",
  storageBucket: "chat-app-fa97d.appspot.com",
  messagingSenderId: "705400062888",
  appId: "1:705400062888:web:e5961675dae32b99e4939d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
