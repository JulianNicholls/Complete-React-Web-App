import React     from 'react';
import ReactDOM  from 'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load Foundation and our own CSS
$(document).foundation();

require('style!css!sass!applicationStyles');


import Main      from 'Main';
import Timer     from 'Timer';
import Countdown from 'Countdown';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
