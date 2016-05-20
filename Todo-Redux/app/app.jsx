import React     from 'react';
import ReactDOM  from 'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
