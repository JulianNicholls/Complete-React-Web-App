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
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    );
  },
  onFormSubmit: function (e) {
    e.preventDefault();

    var ref  = this.refs.name,
        name = ref.value;

    if(name.length > 0) {
      ref.value = '';
      this.props.onNewName(name);
    }
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
      name: this.props.name
    };
  },
  render: function () {
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.props.message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  }
});

var firstName = "Julian";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById("app")
);
