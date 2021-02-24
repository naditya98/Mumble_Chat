import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCykLI8fjtlMnz4ENaNkbpJMiW6jHL5MY8",
    authDomain: "final-8ffe0.firebaseapp.com",
    databaseURL: "https://final-8ffe0-default-rtdb.firebaseio.com",
    projectId: "final-8ffe0",
    storageBucket: "final-8ffe0.appspot.com",
    messagingSenderId: "321294050630",
    appId: "1:321294050630:web:dd4c5914296a439649f147",
    measurementId: "G-N4RCXJC7E3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }