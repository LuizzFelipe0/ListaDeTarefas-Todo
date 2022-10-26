// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6BZs1gp3pV40lC423BJZ0iLLCx1FNZxI",
  authDomain: "todos-list-dc5d6.firebaseapp.com",
  projectId: "todos-list-dc5d6",
  storageBucket: "todos-list-dc5d6.appspot.com",
  messagingSenderId: "852946103726",
  appId: "1:852946103726:web:6d37664f27277880ce2c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);