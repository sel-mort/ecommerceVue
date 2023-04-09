import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxvqMP-mYx06P_4GF3wk8KAb7vtZk4hO8",
    authDomain: "e-store-d3ed6.firebaseapp.com",
    projectId: "e-store-d3ed6",
    storageBucket: "e-store-d3ed6.appspot.com",
    messagingSenderId: "738864187381",
    appId: "1:738864187381:web:54268c7ba35103908942bc"
  };

  initializeApp(firebaseConfig);

  const auth = getAuth();

  export {
    auth
  }