import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBXt02E3kI_uQ7ArDhsDaROwgs5CEz15Tw",
    authDomain: "book-santa-39f31.firebaseapp.com",
    projectId: "book-santa-39f31",
    storageBucket: "book-santa-39f31.appspot.com",
    messagingSenderId: "1023705028193",
    appId: "1:1023705028193:web:fe23968ae3ea58ea1bfc20",
    measurementId: "G-11PFW4DZ3P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()