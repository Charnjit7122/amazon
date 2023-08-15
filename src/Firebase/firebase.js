import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtAUk9dMSZelmj3UxsOkEBCJDQZEqLWnQ",
  authDomain: "fir-73dfb.firebaseapp.com",
  projectId: "fir-73dfb",
  storageBucket: "fir-73dfb.appspot.com",
  messagingSenderId: "197117648786",
  appId: "1:197117648786:web:41eead395efefd61a46b4b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore(app);

export default db;
