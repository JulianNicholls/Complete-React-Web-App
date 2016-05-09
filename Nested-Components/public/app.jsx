var GreeterMessage = React.createClass({
  render: function () {
    var props = this.props;

    return (
      <div>
        <h1>Hello {props.name}</h1>
        <p>{props.message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function  () {
    return (
      <form onSubmit={this.onFormSubmit}>
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
      <div>
        <GreeterMessage name={state.name} message={state.message}/>
        <GreeterForm onUpdate={this.handleUpdates}/>
      </div>
    );
  },
  handleUpdates: function(updates) {
    this.setState(updates);
  }
});

var firstName = "Julian";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById("app")
);
