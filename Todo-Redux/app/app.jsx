import React       from 'react';
import ReactDOM    from 'react-dom';
import {Provider}  from 'react-redux';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

import {setSearchText, toggleShowCompleted, addTask} from 'actions';

var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State:', store.getState());
});

store.dispatch(addTask('Mow the lawn'));

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
