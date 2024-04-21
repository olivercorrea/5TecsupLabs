import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU5D0nLwZ7KvVCIB_SjHckl-m8WfJ6gHM",
  authDomain: "proyecto06-caf4c.firebaseapp.com",
  projectId: "proyecto06-caf4c",
  storageBucket: "proyecto06-caf4c.appspot.com",
  messagingSenderId: "1083995705896",
  appId: "1:1083995705896:web:817f68399c813ea2f09b1d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);

export const database = getFirestore()