import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

require("dotenv").config();

const firebaseConfig = {
   apiKey: process.env.GRAPH_API,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECT_ID,
   storageBucket: process.env.STORAGE_BUCKET,
   messagingSenderId: process.env.MESSAGING_SENDER_ID,
   appId: process.env.APP_ID,
};

console.log(process.env)

export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);