import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBRw33eN3JTP2ATw5SHEB5qMynilq4KOi4",
    authDomain: "ronan-web.firebaseapp.com",
    projectId: "ronan-web",
    storageBucket: "ronan-web.appspot.com",
    messagingSenderId: "13340571791",
    appId: "1:13340571791:web:bb2674a08537755c7ed8fa",
    measurementId: "G-6EN346TG02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
