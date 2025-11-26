// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,

  
  // apiKey: "AIzaSyB8JbCqBBuzPsQn6kjGolcqio-BMVa62C8",
  // authDomain: "footwearzone-1835d.firebaseapp.com",
  // projectId: "footwearzone-1835d",
  // storageBucket: "footwearzone-1835d.firebasestorage.app",
  // messagingSenderId: "371252287670",
  // appId: "1:371252287670:web:c1fe958a0b399927a76e17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);




