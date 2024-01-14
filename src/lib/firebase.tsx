// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




const firebaseConfig = {
    apiKey: "AIzaSyBU5jguZ3HrlT0VN5wR8IA6yNgGWo_H1JM",
    authDomain: "gamified-learning-projec-35310.firebaseapp.com",
    projectId: "gamified-learning-projec-35310",
    storageBucket: "gamified-learning-projec-35310.appspot.com",
    messagingSenderId: "672398586684",
    appId: "1:672398586684:web:37ca3e8e5fcdbf93c0e439",
    measurementId: "G-24FWHBS450"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)





