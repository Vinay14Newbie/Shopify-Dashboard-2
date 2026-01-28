// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-1VgGoZ0GiFPR4voqIkH5gix8YiCyqaE",
  authDomain: "product-admin-app-b2ee3.firebaseapp.com",
  projectId: "product-admin-app-b2ee3",
  storageBucket: "product-admin-app-b2ee3.firebasestorage.app",
  messagingSenderId: "812324591512",
  appId: "1:812324591512:web:a617b0ae47a4429ec27ded",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
