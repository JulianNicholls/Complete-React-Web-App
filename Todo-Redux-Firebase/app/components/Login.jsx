import React from 'react';

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Reactive Agenda - Log in</h1>
        <form ref="form" className="todo-form">
          <input type="text" ref="username" placeholder="Enter your username" />
          <input type="password" ref="password" placeholder="Enter your password" />
          <button className="button expanded">Log in</button>
        </form>
      </div>
    );
  }
});

export default Login;
