// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4X9z-EWXsr2b9xCwNsCV1fExjNWo11YU",
  authDomain: "netflixgpt-ca4ef.firebaseapp.com",
  projectId: "netflixgpt-ca4ef",
  storageBucket: "netflixgpt-ca4ef.appspot.com",
  messagingSenderId: "1073944231380",
  appId: "1:1073944231380:web:f7f127e46ca54a9da5ea41",
  measurementId: "G-NKCZ7FZG6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();