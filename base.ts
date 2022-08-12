import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyC4_4u_GI6u3nOCwR3aJOM2xKXQadVJsuk",
   authDomain: "graphql-express-test.firebaseapp.com",
   projectId: "graphql-express-test",
   storageBucket: "graphql-express-test.appspot.com",
   messagingSenderId: "995676469830",
   appId: "1:995676469830:web:8a60b83614a7c10ec02847"
};

export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);