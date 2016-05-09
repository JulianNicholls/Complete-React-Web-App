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
    var name    = this.state.name,
        message = this.props.message;

    return (
      <div>
        <h1>Hello to {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var ref   = this.refs.name,
        name  = ref.value;

    if(typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });

      ref.value = '';
    }
  }
});

var firstName = "Julian";

ReactDOM.render(
  <Greeter name={firstName} message="Updated Message"/>,
  document.getElementById("app")
);
