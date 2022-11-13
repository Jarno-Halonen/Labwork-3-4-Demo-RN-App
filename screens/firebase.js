import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBTF13de6ZfxJDQempv1WUISfA0cOiqYxs",
    authDomain: "fir-auth-e424e.firebaseapp.com",
    projectId: "fir-auth-e424e",
    storageBucket: "fir-auth-e424e.appspot.com",
    messagingSenderId: "228703606797",
    appId: "1:228703606797:web:747c586949b0ee42065d44"
  };

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

