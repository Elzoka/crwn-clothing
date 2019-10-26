import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfri3rkKP6d0hRU5uDocI-OEDJ9ujr9JY",
    authDomain: "crwn-db-5f8eb.firebaseapp.com",
    databaseURL: "https://crwn-db-5f8eb.firebaseio.com",
    projectId: "crwn-db-5f8eb",
    storageBucket: "crwn-db-5f8eb.appspot.com",
    messagingSenderId: "656064575669",
    appId: "1:656064575669:web:9ae41a1a0337bda551a6fc",
    measurementId: "G-N8SN5WD2PX"
};
 
firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;