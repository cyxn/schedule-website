import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCt6npX9z7Uijj29HcL3rYYSGQ1yPdrEBA",
  authDomain: "lessons-schedule-fc80d.firebaseapp.com",
  databaseURL: "https://lessons-schedule-fc80d.firebaseio.com",
  storageBucket: "lessons-schedule-fc80d.appspot.com",
  messagingSenderId: "364223037382"
}

firebase.initializeApp(config);

const root = firebase.database().ref();
const todos = firebase.database().ref('todos');

const Fb = {
  root,
  todos
};
export { Fb };
