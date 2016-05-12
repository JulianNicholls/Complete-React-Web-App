var React     = require('react');
var ReactDOM  = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation and our own CSS
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');


var Main      = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
