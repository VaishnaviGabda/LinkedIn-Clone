import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBRogmbZR2Q2YxE1UL7MqWjPKHUjA76_IQ",
  authDomain: "linkedin-clone-9ec53.firebaseapp.com",
  projectId: "linkedin-clone-9ec53",
  storageBucket: "linkedin-clone-9ec53.appspot.com",
  messagingSenderId: "551653039080",
  appId: "1:551653039080:web:1d3c525be5bdd12438625d",
  measurementId: "G-M5G31P6ZD9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

