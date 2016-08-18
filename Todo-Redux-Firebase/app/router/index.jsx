import React               from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import firebase            from 'app/firebase'

import Login               from 'Login';
import TodoApp             from 'TodoApp';

var store = require('configureStore').configure();

// Middleware for authentication of private routes

function requireLogin(nextState, replace, next) {
  if(!firebase.auth().currentUser) {  // Not logged in
    console.log('Not Authorised');
    replace('/');
  }

  next();    // Logged in OK, continue
}

function redirectIfLoggedIn(nextState, replace, next) {
  if(firebase.auth().currentUser) {  // Logged in
    replace('/tasks');
  }

  next();
}

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="/tasks" component={TodoApp} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);
