import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADHfvDwgPfDOmXE478vjlUnmC2wNk6eiY",
  authDomain: "twitter-clone-de147.firebaseapp.com",
  projectId: "twitter-clone-de147",
  storageBucket: "twitter-clone-de147.appspot.com",
  messagingSenderId: "885003489474",
  appId: "1:885003489474:web:37e7d7da4f9c514f642b5b",
  measurementId: "G-322CK6EXRT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;