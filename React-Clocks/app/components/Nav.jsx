import React from 'react';

import {Link, IndexLink}  from 'react-router';

// var {Link, IndexLink} = require('react-router');

var Nav = () =>
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Reactive Clocks</li>
        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
        <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
      </ul>
    </div>
    <div className="top-bar-right menu-text">
      Created by <a href="http://reallybigshoe.co.uk" target="_blank">Julian Nicholls</a>
    </div>
  </div>

module.exports = Nav;
