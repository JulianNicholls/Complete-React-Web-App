var React = require('react');

var Nav = require('Nav');

var Main = (props) =>
  <div className="main">
    <Nav />
    {props.children}
  </div>

module.exports = Main;
