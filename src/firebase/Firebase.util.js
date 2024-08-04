import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAx_amdCUkzObvmXRIDk10zy9n9MrxUmJU",
    authDomain: "ecom-redux-auth.firebaseapp.com",
    projectId: "ecom-redux-auth",
    storageBucket: "ecom-redux-auth.appspot.com",
    messagingSenderId: "336702569660",
    appId: "1:336702569660:web:69d9757204da65969224b9",
    measurementId: "G-EZ6ND3ZNZZ"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    console.log(userRef);

    const snapshot = await userRef.get()
    console.log(snapshot);

    if(!snapshot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }  catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef
  }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase