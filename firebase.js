// import firebase from 'firebase/app';
// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrjpMzwoXmxSAAQxCPGJ_HLYEi1WoHvMI",
  authDomain: "egyptproject-eb6e9.firebaseapp.com",
  projectId: "egyptproject-eb6e9",
  storageBucket: "egyptproject-eb6e9.appspot.com",
  messagingSenderId: "832843091747",
  appId: "1:832843091747:web:76b5e51ab96235d2a3c696",
  measurementId: "G-ENRC4N1W8E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;