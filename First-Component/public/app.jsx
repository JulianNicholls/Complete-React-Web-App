var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'you',
      message: 'This is from the component'
    };
  },
  render: function () {
    var name    = this.props.name,
        message = this.props.message;

    return (
      <div>
        <h1>Hello to {name} from React Component</h1>
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

    var name = this.refs.name.value;

    alert(name);
  }
});

var firstName = "Julian";

ReactDOM.render(
  <Greeter name={firstName} message="Updated Message"/>,
  document.getElementById("app")
);
