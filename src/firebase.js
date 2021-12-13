// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY1YZ2lz0u-fB0rp9QfToIPDj4pPzK5b0",
  authDomain: "shop-ae8bd.firebaseapp.com",
  projectId: "shop-ae8bd",
  storageBucket: "shop-ae8bd.appspot.com",
  messagingSenderId: "581764664720",
  appId: "1:581764664720:web:a8a7123d78830842247715",
  measurementId: "G-BQW07FQ9T1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
