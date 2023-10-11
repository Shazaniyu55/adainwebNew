import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAn-EERe33d360g9ZWt8vwSghc39qV1oAc",
    authDomain: "adainwebapp.firebaseapp.com",
    projectId: "adainwebapp",
    storageBucket: "adainwebapp.appspot.com",
    messagingSenderId: "645443536568",
    appId: "1:645443536568:web:084081b3e7c792c914564d",
    measurementId: "G-W9LDF9V2E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
const auth = getAuth(app)

export {auth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut}
// export const userCollection = collection(db, "applicants")
