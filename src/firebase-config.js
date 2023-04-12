// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "csc179-f2465.firebaseapp.com",
  projectId: "csc179-f2465",
  storageBucket: "csc179-f2465.appspot.com",
  messagingSenderId: "840244364821",
  appId: "1:840244364821:web:66423609221418c742301c",
  measurementId: "G-5NNXZLPDEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const db = getFirestore(app)


