// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "oyolah-blog.firebaseapp.com",
    projectId: "oyolah-blog",
    storageBucket: "oyolah-blog.appspot.com",
    messagingSenderId: "527939265940",
    appId: "1:527939265940:web:61655181664dcb9d2a1b81",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
