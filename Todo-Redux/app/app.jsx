import React       from 'react';
import ReactDOM    from 'react-dom';
import {Provider}  from 'react-redux';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

import {loadTasks} from 'actions';

import TodoAPI from 'TodoAPI';

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();

  TodoAPI.setTasks(state.tasks);

  console.log('New State:', store.getState());
});

var initialTasks = TodoAPI.getTasks();

store.dispatch(loadTasks(initialTasks));

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
