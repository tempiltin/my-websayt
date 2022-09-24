// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSM22LOn16mRjoTkB4eEdELGFswWnnwKg",
  authDomain: "tempiltin-uz-for-user-auth.firebaseapp.com",
  projectId: "tempiltin-uz-for-user-auth",
  storageBucket: "tempiltin-uz-for-user-auth.appspot.com",
  messagingSenderId: "246017683667",
  appId: "1:246017683667:web:8519f65ab21fcfef936426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;