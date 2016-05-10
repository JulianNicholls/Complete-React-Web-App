var React     = require('react');

var GreeterMessage = React.createClass({
  render: function () {
    var props = this.props;

    return (
      <div className="greeter-message">
        <h1>Hello {props.name}</h1>
        <p>{props.message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
