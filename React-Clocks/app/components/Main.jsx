import React from 'react';

import Nav from 'Nav';

var Main = (props) =>
  <div>
    <Nav />
    <div className="row">
      <div className="columns medium-6 small-centered">
        {props.children}
      </div>
    </div>
  </div>

module.exports = Main;
