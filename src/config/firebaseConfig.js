// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJ5NDHRY11cnlK266xmrd-gHtHbIzPVE",
  authDomain: "app-bd-97068.firebaseapp.com",
  databaseURL: "https://app-bd-97068-default-rtdb.firebaseio.com",
  projectId: "app-bd-97068",
  storageBucket: "app-bd-97068.appspot.com",
  messagingSenderId: "170156997464",
  appId: "1:170156997464:web:20c433f8b5dc979f74832d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export {database , storage };