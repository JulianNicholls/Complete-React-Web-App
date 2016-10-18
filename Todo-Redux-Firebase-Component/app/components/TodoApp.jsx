import React, { Component }   from 'react';
import { connect }            from 'react-redux';

import TodoSearch             from 'TodoSearch';
import TodoList               from 'TodoList';
import TodoForm               from 'TodoForm';

import { startLogout }        from 'actions';

export class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }
  
  render() {
    return (
      <div>
        <div className="page-actions">
          <button className="button small secondary" onClick={this.onLogout}>Log out</button>
        </div>
        <h1 className="page-title">Reactive Agenda</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-10 large-8">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onLogout() {
    const { dispatch } = this.props;

    dispatch(startLogout());
  }
}

export default connect()(TodoApp);
