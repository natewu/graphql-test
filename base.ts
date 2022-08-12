import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

//import .env

const firebaseConfig = {
   apiKey: process.env.API,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECT_ID,
   storageBucket: process.env.STORAGE_BUCKET,
   messagingSenderId: process.env.SENDER_ID,
   appId: process.env.APP_ID,
};

export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);