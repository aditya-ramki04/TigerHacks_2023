// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzLgHGloK4yUOEaO37DBw0_k4joiD7A1g",
  authDomain: "tigerhacks2023.firebaseapp.com",
  projectId: "tigerhacks2023",
  storageBucket: "tigerhacks2023.appspot.com",
  messagingSenderId: "771575549794",
  appId: "1:771575549794:web:60a3048aa0d6346c87663b",
  measurementId: "G-6EC1CTSRX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);