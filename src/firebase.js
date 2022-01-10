import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBmdjDPDzUVCZG6cl-QoA05PDbk3r7ecEU",
    authDomain: "twitter-7190e.firebaseapp.com",
    projectId: "twitter-7190e",
    storageBucket: "twitter-7190e.appspot.com",
    messagingSenderId: "346370097254",
    appId: "1:346370097254:web:babdb8b799f0446e80ada7"
  };

  export default firebase.initializeApp(firebaseConfig);