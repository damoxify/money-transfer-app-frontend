import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "money-transfer-app-983eb.firebaseapp.com",
  projectId: "money-transfer-app-983eb",
  storageBucket: "money-transfer-app-983eb.appspot.com",
  messagingSenderId: "853548220147",
  appId: "1:853548220147:web:044f89c01cb551cdde8186"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)