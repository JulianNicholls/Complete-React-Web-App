import React         from 'react';
import ReactDOM      from 'react-dom';
import { Provider }  from 'react-redux';

import { startLoadTasks } from 'actions';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

var store = require('configureStore').configure();

// Load initial tasks from Firebase
store.dispatch(startLoadTasks());

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
