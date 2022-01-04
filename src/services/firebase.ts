import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBgl4Fg7F4UVrylE0KhHEledKn-uHzKAXg",
  authDomain: "letmeask-68a9e.firebaseapp.com",
  databaseURL: "https://letmeask-68a9e-default-rtdb.firebaseio.com",
  projectId: "letmeask-68a9e",
  storageBucket: "letmeask-68a9e.appspot.com",
  messagingSenderId: "194469901500",
  appId: "1:194469901500:web:ff056dc2ccd4bcb9f48cb9"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()
