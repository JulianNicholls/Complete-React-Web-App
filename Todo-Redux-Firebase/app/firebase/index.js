import firebase from 'firebase';

try {
  const firebaseConfig = {
      apiKey:        "AIzaSyD81p72bgrVESXFeGA2zHvp6gPT7r1NUno",
      authDomain:    "reactive-agenda.firebaseapp.com",
      databaseURL:   "https://reactive-agenda.firebaseio.com",
      storageBucket: "reactive-agenda.appspot.com",
  };

  firebase.initializeApp(firebaseConfig);
} catch(e) {

}

export const firebaseRef = firebase.database().ref();

export default firebase;
