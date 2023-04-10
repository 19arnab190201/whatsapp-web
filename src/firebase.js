// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxyoYEJK77DMoLnObpEScKST3pS5pMdtg",
  authDomain: "whatsapp-web-d34c5.firebaseapp.com",
  projectId: "whatsapp-web-d34c5",
  storageBucket: "whatsapp-web-d34c5.appspot.com",
  messagingSenderId: "243751244361",
  appId: "1:243751244361:web:631dbfa7de0135a79f2598",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export default app;
