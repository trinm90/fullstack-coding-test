import firebase from 'firebase/app';
import 'firebase/auth';

console.log("key: " + process.env.NEXT_PUBLIC_API_KEY);

var firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
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