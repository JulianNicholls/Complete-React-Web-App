import React         from 'react';
import ReactDOM      from 'react-dom';
import { Provider }  from 'react-redux';

import { loadTasks } from 'actions';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

import '../index.js';

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();

  TodoAPI.setTasks(state.tasks);
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
