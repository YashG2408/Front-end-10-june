// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB52MlZO2bpL87wzmoA0y5I9ERLYp5R3DM",
  authDomain: "grandoria-c5be0.firebaseapp.com",
  projectId: "grandoria-c5be0",
  storageBucket: "grandoria-c5be0.firebasestorage.app",
  messagingSenderId: "648359322822",
  appId: "1:648359322822:web:53dbdf05684d9fa4ea63c7",
  measurementId: "G-5DSVPGH1ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

