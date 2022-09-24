import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_AUTH_MESSANGER_SENDING_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;