import React     from 'react';
import ReactDOM  from 'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <p>First Redux</p>,
  document.getElementById('app')
);

require('./redux-example.jsx');
