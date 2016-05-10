var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h1>Main Component</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
