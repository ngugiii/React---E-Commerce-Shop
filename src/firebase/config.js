import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCMQpPOF7Ncqe1HJDjRFLgN2F6KIWGhscg",
  authDomain: "jeafs-shop.firebaseapp.com",
  projectId: "jeafs-shop",
  storageBucket: "jeafs-shop.appspot.com",
  messagingSenderId: "760574229649",
  appId: "1:760574229649:web:083b3454f4f0801ab0d330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app