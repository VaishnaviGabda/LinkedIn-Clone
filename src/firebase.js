import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRogmbZR2Q2YxE1UL7MqWjPKHUjA76_IQ",
  authDomain: "linkedin-clone-9ec53.firebaseapp.com",
  projectId: "linkedin-clone-9ec53",
  storageBucket: "linkedin-clone-9ec53.appspot.com",
  messagingSenderId: "551653039080",
  appId: "1:551653039080:web:1d3c525be5bdd12438625d",
  measurementId: "G-M5G31P6ZD9"
};

//connect front end to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
//in order to get our database from our code
const db = firebaseApp.firestore();
// getting authentication module
const auth = firebase.auth();
//allows us google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
