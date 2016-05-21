import React     from 'react';
import ReactDOM  from 'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

import {setSearchText, toggleShowCompleted, addTask} from 'actions';

var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State:', store.getState());
});

store.dispatch(addTask('Clean the yard'));
store.dispatch(setSearchText('yard'));
store.dispatch(toggleShowCompleted());

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
