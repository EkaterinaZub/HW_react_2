// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAftXjcySWYsLZmvNgJ0TamYhXRs2Nc2Q4",
  authDomain: "restaurant-2986d.firebaseapp.com",
  projectId: "restaurant-2986d",
  storageBucket: "restaurant-2986d.appspot.com",
  messagingSenderId: "204676079120",
  appId: "1:204676079120:web:d1e0ed3c92d23c5fe9f495",
  measurementId: "G-7VT2S04PGP"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export default app;