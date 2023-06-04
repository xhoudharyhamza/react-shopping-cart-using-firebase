import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvjDlnyGFNkTdmZFQY68lUueAyvVPbvPA",
  authDomain: "shopnow-aec8d.firebaseapp.com",
  projectId: "shopnow-aec8d",
  storageBucket: "shopnow-aec8d.appspot.com",
  messagingSenderId: "58782589149",
  appId: "1:58782589149:web:a1e5cc17976756694ffb34",
  measurementId: "G-NT75405178"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)