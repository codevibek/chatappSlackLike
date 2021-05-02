import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDwtVyQX93pkbt06jOFvdQp2Qy5T9-g2DM",
  authDomain: "chatapp-6146f.firebaseapp.com",
  projectId: "chatapp-6146f",
  storageBucket: "chatapp-6146f.appspot.com",
  messagingSenderId: "824752780605",
  appId: "1:824752780605:web:8a2f5b6bfff76ee3654154",
  measurementId: "G-VGC9XMCFMW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
