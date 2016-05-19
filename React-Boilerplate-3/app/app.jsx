import React     from 'react';
import ReactDOM  from 'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <h1>React Boilerplate 3</h1>,
  document.getElementById('app')
);
