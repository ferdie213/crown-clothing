import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyAsObkrlCRcyMHAYBjEv0paWd8J_ociWMs",
    authDomain: "crown-store-1d2f6.firebaseapp.com",
    projectId: "crown-store-1d2f6",
    storageBucket: "crown-store-1d2f6.appspot.com",
    messagingSenderId: "783479644981",
    appId: "1:783479644981:web:44e0a4c56a577d12da227c",
    measurementId: "G-0Z37F1YQXR"
};

firebase.initializeApp(Config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  