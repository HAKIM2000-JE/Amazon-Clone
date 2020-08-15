import React from 'react'
import firebase from 'firebase'


const { fireEvent } = require("@testing-library/react");




const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDrKDZrni0fXr2ZxThEDYPSaM9XCIXjvZA",
  authDomain: "clone-d96d2.firebaseapp.com",
  databaseURL: "https://clone-d96d2.firebaseio.com",
  projectId: "clone-d96d2",
  storageBucket: "clone-d96d2.appspot.com",
  messagingSenderId: "334849282784",
  appId: "1:334849282784:web:18da3d611e8cbbfbe8f685",
  measurementId: "G-D5DEXH4M4Q"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};