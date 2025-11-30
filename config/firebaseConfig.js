// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBn78zXarCaAJ3b9eoSaJN2kf5zr773U",
  authDomain: "winnies-shoes.firebaseapp.com",
  projectId: "winnies-shoes",
  storageBucket: "winnies-shoes.firebasestorage.app",
  messagingSenderId: "574202053392",
  appId: "1:574202053392:web:52819392ab069858571b95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };