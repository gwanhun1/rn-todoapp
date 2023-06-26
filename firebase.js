// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD58EiaWQu7TFusIjUFhaG28pHlFP30xOg",
  authDomain: "react-native-todoapp-81636.firebaseapp.com",
  projectId: "react-native-todoapp-81636",
  storageBucket: "react-native-todoapp-81636.appspot.com",
  messagingSenderId: "486350555404",
  appId: "1:486350555404:web:2976d7d0eb6d90be28a129",
  measurementId: "G-EN990ZHSV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
