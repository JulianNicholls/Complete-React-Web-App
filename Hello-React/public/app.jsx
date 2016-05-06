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
      </div>
    );
  }
});

var firstName = "Julian";

ReactDOM.render(
  <Greeter name={firstName} message="Updated Message"/>,
  document.getElementById("app")
);
