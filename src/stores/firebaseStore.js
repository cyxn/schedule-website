import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCt6npX9z7Uijj29HcL3rYYSGQ1yPdrEBA",
  authDomain: "lessons-schedule-fc80d.firebaseapp.com",
  databaseURL: "https://lessons-schedule-fc80d.firebaseio.com",
  storageBucket: "lessons-schedule-fc80d.appspot.com",
  messagingSenderId: "364223037382"
}

const firebaseApp = firebase.initializeApp(config);

const fb_root = firebaseApp.database().ref();
const fb_auth = firebaseApp.auth();


export { fb_root, fb_auth };
