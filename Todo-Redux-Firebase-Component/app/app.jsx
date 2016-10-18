import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { browserHistory } from 'react-router';

import firebase        from 'app/firebase';

import router          from 'app/router';

import { startLoadTasks, login, logout } from 'actions';

var store = require('configureStore').configure();

// Subscribe to login / logout actions
firebase.auth().onAuthStateChanged((user) => {
  if(user) {    // Logged in
    store.dispatch(login(user.uid));
    store.dispatch(startLoadTasks());

    browserHistory.push('/tasks');
  }
  else {
    store.dispatch(logout());
    browserHistory.push('/');
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
