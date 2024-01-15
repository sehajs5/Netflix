
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa3fbW5OOO4X-1K-DJILQOHMCrZZ7Qw5c",
  authDomain: "netflix-clone-react-a932b.firebaseapp.com",
  projectId: "netflix-clone-react-a932b",
  storageBucket: "netflix-clone-react-a932b.appspot.com",
  messagingSenderId: "519676485866",
  appId: "1:519676485866:web:5fe5b47e83df4d0106b793",
  measurementId: "G-BSTFW5ZH9H"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);

