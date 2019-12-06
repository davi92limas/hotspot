import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBm4vL0wQVyZd-s6Swj6Bel0M-lqAuIn-k",
    authDomain: "hotspot-64d71.firebaseapp.com",
    databaseURL: "https://hotspot-64d71.firebaseio.com",
    projectId: "hotspot-64d71",
    storageBucket: "hotspot-64d71.appspot.com",
    messagingSenderId: "576888304892",
    appId: "1:576888304892:web:c80bd8e11c1fa18a059379"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);