// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBks8UtfbVBitpnJDBJMM6paheCKbJEvJI',
  authDomain:'netflix-react-clone-24722.firebaseapp.com',
  projectId: 'netflix-react-clone-24722',
  storageBucket: 'netflix-react-clone-24722.appspot.com',
  messagingSenderId: '11553677869',
  appId: '1:115536778691:web:7caac1f0b828da876f9976'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
