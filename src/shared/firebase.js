import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvqz6xyMb4gY6ZWQmxgTc00VPLscFI3PI",
  authDomain: "home-12da3.firebaseapp.com",
  projectId: "home-12da3",
  storageBucket: "home-12da3.appspot.com",
  messagingSenderId: "416929206072",
  appId: "1:416929206072:web:16c8c9bb4c6358f234bbcd",
  measurementId: "G-LZBY55NCX9"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
