var React = require('react');

var GreeterMessage  = require('./GreeterMessage');
var GreeterForm     = require('./GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name:    'you',
      message: 'This is from the component'
    };
  },
  getInitialState: function () {
    return {
      name:     this.props.name,
      message:  this.props.message
    };
  },
  render: function () {
    var state = this.state;

    return (
      <div className="greeter">
        <GreeterMessage name={state.name} message={state.message}/>
        <GreeterForm onUpdate={this.handleUpdates}/>
      </div>
    );
  },
  handleUpdates: function(updates) {
    this.setState(updates);
  }
});

module.exports = Greeter;
