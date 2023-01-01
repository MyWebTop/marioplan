import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

//JF addition
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAK5hGljEK1dx0Mzgxa7k3qyLrRQgiJCAA",
  authDomain: "mario-plan-ebe96.firebaseapp.com",
  projectId: "mario-plan-ebe96",
  storageBucket: "mario-plan-ebe96.appspot.com",
  messagingSenderId: "331383362725",
  appId: "1:331383362725:web:9513602bcd085d17d1694c",
  measurementId: "G-RZWK3TE2ZH"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//line above modifed
const app = firebase.initializeApp(firebaseConfig);

//Two lines below are JF additions
const db = getFirestore();
export { db }

const analytics = getAnalytics(app);
//firebase.firestore().settings({ timestampsInSnapshots: true });

//trying this line instead of the one below it
const firestore = getFirestore(app)
//firebase.firestore();

//export default firebase;

// should it be this -> 
//export default fbConfig
export default firebase;