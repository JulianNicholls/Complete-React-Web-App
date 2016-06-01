import firebase from 'firebase';

const firebaseConfig = {
    apiKey:        "AIzaSyD81p72bgrVESXFeGA2zHvp6gPT7r1NUno",
    authDomain:    "reactive-agenda.firebaseapp.com",
    databaseURL:   "https://reactive-agenda.firebaseio.com",
    storageBucket: "reactive-agenda.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const firebaseRef = firebase.database().ref();

// firebaseRef.set({   // Sets the whole database content
//   app: {
//     name: 'Reactive-Agenda',
//     version: '0.7.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Julian',
//     age: 24
//   },
//   unneeded: {
//     title1: 'text 1',
//     title2: 'text 2'
//   }
// });

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

// firebaseRef.child('unneeded/title1').remove();
//
// firebaseRef.child('unneeded').update({  // This will actually remove unneeded as well, because it becomes null
//   title2: null
// });

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Values:', snapshot.val())
// }, (error) => {
//   console.error('Unable to fetch value', error);
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('app Values:', snapshot.key, snapshot.val())
// }, (error) => {
//   console.error('Unable to fetch value', error);
// });
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value:', snapshot.val());
// });
//
// firebaseRef.update({ isRunning: false })
//
// firebaseRef.off();

// function changed(snapshot) {
//   console.log(snapshot.key, 'changed:', snapshot.val());
// }
//
// firebaseRef.child('user').on('value', changed);
//
// firebaseRef.child('user').update({
//   name: 'Tara'
// });
//
// firebaseRef.child('app').update({
//   version: '0.8.0'
// });
//
// firebaseRef.off(changed);

var tasksRef   = firebaseRef.child('tasks');
var newTaskRef = tasksRef.push();

// newTaskRef.set({
//   text: 'Third task'
// });
//
// tasksRef.push({
//   text: 'Fourth task'
// })

tasksRef.on('child_added', (snapshot) => {
  console.log('Child added - ID:', snapshot.key, ':', snapshot.val())
});

tasksRef.on('child_changed', (snapshot) => {
  console.log('Child changed - ID:', snapshot.key, ':', snapshot.val())
});

tasksRef.on('child_removed', (snapshot) => {
  console.log('Child removed - ID:', snapshot.key, ':', snapshot.val())
});

// tasksRef.push({
//   text: 'Fifth task'
// });
