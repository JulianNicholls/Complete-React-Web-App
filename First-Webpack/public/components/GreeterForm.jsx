var React     = require('react');

var GreeterForm = React.createClass({
  render: function  () {
    return (
      <form onSubmit={this.onFormSubmit} className="greeter-form">
        <input type="text" ref="name" placeholder="Name"/><br />
        <textarea ref="message" placeholder="Message"/><br />
        <button>Update</button>
      </form>
    );
  },
  onFormSubmit: function (e) {
    e.preventDefault();

    var refs    = this.refs,
        name    = refs.name.value,
        message = refs.message.value,
        updates = {};

    if(name.length > 0) {
      refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0) {
      refs.message.value = '';
      updates.message = message;
    }

    this.props.onUpdate(updates);
  }
});

module.exports = GreeterForm;
