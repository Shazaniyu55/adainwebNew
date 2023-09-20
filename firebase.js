import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'



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


export const userCollection = collection(db, "applicants")
