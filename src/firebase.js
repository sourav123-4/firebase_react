import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1N0PNsKQP5jB9KCq8z8HeZgwr5oZN3NU",
  authDomain: "formfirebase-da2ec.firebaseapp.com",
  databaseURL: "https://formfirebase-da2ec-default-rtdb.firebaseio.com",
  projectId: "formfirebase-da2ec",
  storageBucket: "formfirebase-da2ec.appspot.com",
  messagingSenderId: "549589998540",
  appId: "1:549589998540:web:c19d9485e14479397b9b69",
  measurementId: "G-HNQ1PFKFLX",
  //   apiKey: process.env.REACT_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_FIREBASE_DOMAIN,
  //   databaseURL: process.env.REACT_FIREBASE_URL,
  //   projectId: process.env.REACT_FIREBASE_PROJECTID,
  //   storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_FIREBASE_SENDER_ID,
  //   appId: process.env.REACT_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
