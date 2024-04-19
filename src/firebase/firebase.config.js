
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZhOxpboZeKtG7OeVe9Kf-PKNWmkTI73E",
  authDomain: "auth-firebase-context-ta-8b63d.firebaseapp.com",
  databaseURL: "https://auth-firebase-context-ta-8b63d-default-rtdb.firebaseio.com",
  projectId: "auth-firebase-context-ta-8b63d",
  storageBucket: "auth-firebase-context-ta-8b63d.appspot.com",
  messagingSenderId: "163601608543",
  appId: "1:163601608543:web:89218eae27f584afa810ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;
