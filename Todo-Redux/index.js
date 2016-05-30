import firebase from 'firebase';

const firebaseConfig = {
    apiKey:        "AIzaSyD81p72bgrVESXFeGA2zHvp6gPT7r1NUno",
    authDomain:    "reactive-agenda.firebaseapp.com",
    databaseURL:   "https://reactive-agenda.firebaseio.com",
    storageBucket: "reactive-agenda.appspot.com",
  };

firebase.initializeApp(firebaseConfig);

const firebaseRef = firebase.database().ref();

firebaseRef.set({   // Sets the whole database content
  app: {
    name: 'Reactive-Agenda',
    version: '0.7.0'
  },
  isRunning: true,
  user: {
    name: 'Julian',
    age: 24
  },
  unneeded: {
    title1: 'text 1',
    title2: 'text 2'
  }
});

// firebaseRef.child('user').set({ name: 'Julian' }).then(() => {
//   console.log("Set worked");
// }, () => {
//   console.error("Set failed");
// });
//
// firebaseRef.child('app').set({
//   name: 'Reactive-Agenda',
//   version: '0.7.0'
// });
//
// firebaseRef.update({
//   isRunning: true,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   version: '0.7.0'
// });

firebaseRef.child('unneeded/title1').remove();

firebaseRef.child('unneeded').update({
  title2: null
});
