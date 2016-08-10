import React         from 'react';
import ReactDOM      from 'react-dom';
import { Provider }  from 'react-redux';

import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import { startLoadTasks } from 'actions';

import Login   from 'Login';
import TodoApp from 'TodoApp';

var store = require('configureStore').configure();

// Load initial tasks from Firebase
store.dispatch(startLoadTasks());

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="tasks" component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
