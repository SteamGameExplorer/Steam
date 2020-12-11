import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBVbzFswMxz0NoBU8xN1LBOM_cFXTEsyPM",
    authDomain: "steam-7ef72.firebaseapp.com",
    databaseURL: "https://steam-7ef72.firebaseio.com",
    projectId: "steam-7ef72",
    storageBucket: "steam-7ef72.appspot.com",
    messagingSenderId: "991335817377",
    appId: "1:991335817377:web:6dac5fe9c81758b2b3d0e0",
    measurementId: "G-QFS55MEVZS"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

