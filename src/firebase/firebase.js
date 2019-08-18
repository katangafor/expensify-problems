import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// var firebaseConfig = {
//   apiKey: "AIzaSyDRktL6nn3TEemftuWhf5a0Ux5Ot5UNKmY",
//   authDomain: "expensify-test-abc00.firebaseapp.com",
//   databaseURL: "https://expensify-test-abc00.firebaseio.com",
//   projectId: "expensify-test-abc00",
//   storageBucket: "",
//   messagingSenderId: "363135808134",
//   appId: "1:363135808134:web:8e7ebf0c496f36c5"
// };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// LEGIT
// const firebaseConfig = {
//   apiKey: "AIzaSyC-BEK1wA2UbDnIl63A3hhP0B74p3uDrHw",
//   authDomain: "expensify-38356.firebaseapp.com",
//   databaseURL: "https://expensify-38356.firebaseio.com",
//   projectId: "expensify-38356",
//   storageBucket: "",
//   messagingSenderId: "414384365459",
//   appId: "1:414384365459:web:cc1905aaf8092548"
// };

// TEST
