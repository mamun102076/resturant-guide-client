// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAJxQbvp7gtjVTd_GAIrmnZA1BXsyUg_4",
  authDomain: "restaurant-guide-8787d.firebaseapp.com",
  projectId: "restaurant-guide-8787d",
  storageBucket: "restaurant-guide-8787d.appspot.com",
  messagingSenderId: "503842284222",
  appId: "1:503842284222:web:3ebb023fb569c363c5f4ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;