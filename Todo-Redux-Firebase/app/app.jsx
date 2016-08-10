import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { hashHistory } from 'react-router';

import firebase        from 'app/firebase';

import router          from 'app/router';

import { startLoadTasks } from 'actions';

// import Login   from 'Login';
// import TodoApp from 'TodoApp';

var store = require('configureStore').configure();

// Load initial tasks from Firebase
store.dispatch(startLoadTasks());

// Subscribe to login / logout actions
firebase.auth().onAuthStateChanged((user) => {
  if(user) {    // Logged in
    hashHistory.push('tasks');
  }
  else {
    hashHistory.push('/');
  }
});

// Load Foundation and our own CSS
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
