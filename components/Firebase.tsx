import firebase from 'firebase/app';
import 'firebase/auth';

console.log("key: " + process.env.REACT_APP_API_KEY);

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

console.log("key config: " + firebaseConfig.apiKey);

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  console.log("init firebase");
  firebase.initializeApp(firebaseConfig);
} else {
  console.log("use existing firebase");
  firebase.app(); // if already initialized, use that one
}

const Firebase = {
  auth: firebase.auth()
}

export default Firebase;