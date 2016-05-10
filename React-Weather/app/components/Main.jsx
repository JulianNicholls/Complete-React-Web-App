var React = require('react');

var Nav = require('Nav')

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main Component</h1>
        <Nav />
      </div>
    )
  }
});

module.exports = Main;
