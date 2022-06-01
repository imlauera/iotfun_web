  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAXZzTwC_Nqh-ZCepllSi8XKTnOcd6UtY4",
  authDomain: "esp32-bd971.firebaseapp.com",
  databaseURL: "https://esp32-bd971-default-rtdb.firebaseio.com",
  projectId: "esp32-bd971",
  storageBucket: "esp32-bd971.appspot.com",
  messagingSenderId: "174067091908",
  appId: "1:174067091908:web:c70265a69ddb439c0a3c91",
  measurementId: "G-MYPPQJS3MT"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
//
const database = getDatabase(app);
const auth = getAuth();

export { app, database, auth }
