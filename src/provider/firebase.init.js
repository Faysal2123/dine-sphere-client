// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3CLW-fib8et-Joyfm7Tm6pVaafLgi3c",
  authDomain: "fir-project-7ed33.firebaseapp.com",
  projectId: "fir-project-7ed33",
  storageBucket: "fir-project-7ed33.firebasestorage.app",
  messagingSenderId: "226889981539",
  appId: "1:226889981539:web:7ef121d0c7bd085719e256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;