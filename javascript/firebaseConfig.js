// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDIxGRfGs9LOxsKSzQJFut2PCZ5FjAcg4",
  authDomain: "sushi-you-again.firebaseapp.com",
  projectId: "sushi-you-again",
  storageBucket: "sushi-you-again.appspot.com",
  messagingSenderId: "604242790877",
  appId: "1:604242790877:web:001494b7e89b86b3054e34",
  measurementId: "G-NDSDQRVPM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export app;
