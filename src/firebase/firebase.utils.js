import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCDfULfw5lOwmWEtpejXoGxwXPNK9XeRgE",
  authDomain: "crwn-db-ad892.firebaseapp.com",
  projectId: "crwn-db-ad892",
  storageBucket: "crwn-db-ad892.appspot.com",
  messagingSenderId: "797408138757",
  appId: "1:797408138757:web:e74f79af815109917a6e6c",
  measurementId: "G-54EFER962G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;