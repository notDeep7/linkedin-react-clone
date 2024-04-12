import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvroaJt0RH1VgyywO03zcH6NWqRAOhWww",
  authDomain: "linkedin-clone-deep.firebaseapp.com",
  projectId: "linkedin-clone-deep",
  storageBucket: "linkedin-clone-deep.appspot.com",
  messagingSenderId: "942407550088",
  appId: "1:942407550088:web:83b3b775abb44660628b3d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
