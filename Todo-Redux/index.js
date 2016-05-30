import firebase from 'firebase';

var config = {
    apiKey:        "AIzaSyD81p72bgrVESXFeGA2zHvp6gPT7r1NUno",
    authDomain:    "reactive-agenda.firebaseapp.com",
    databaseURL:   "https://reactive-agenda.firebaseio.com",
    storageBucket: "reactive-agenda.appspot.com",
  };

  firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Reactive-Agenda'
});
