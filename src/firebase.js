import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxymn1K0veZX5a6FNZza2Uz2P0vaONDrU",
    authDomain: "minor-8e390.firebaseapp.com",
    projectId: "minor-8e390",
    storageBucket: "minor-8e390.appspot.com",
    messagingSenderId: "1068167780817",
    appId: "1:1068167780817:web:4717ad10091bb864e3a8f0",
    measurementId: "G-C7Q5YQBTM4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }