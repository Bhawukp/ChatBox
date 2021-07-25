import firebase from "firebase/app";
import "firebase/auth";
 export const auth =firebase.initializeApp ({
    apiKey: "AIzaSyBl6mrZm4fOycPayAWELcFGgnrL4usSW60",
    authDomain: "chatbox-updated.firebaseapp.com",
    projectId: "chatbox-updated",
    storageBucket: "chatbox-updated.appspot.com",
    messagingSenderId: "490712624339",
    appId: "1:490712624339:web:a0ea1f508a8d1183407826"
  }).auth();