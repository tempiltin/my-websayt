// const  firebase  = require("firebase/app")
// require("firebase/auth")


// const config = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_AUTH_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_AUTH_MESSANGER_SENDING_ID,
//     appId: process.env.REACT_APP_AUTH_APP_ID,
//     measurementId: process.env.REACT_APP_AUTH_MEASSUREMENT_ID
// });

// export const auth = firebase.auth();

// /**GOOGLE AUTH INTEGRATION CODELARI */

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default config;