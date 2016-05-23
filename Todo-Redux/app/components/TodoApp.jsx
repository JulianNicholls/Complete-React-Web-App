import React  from 'react';
import UUID   from 'node-uuid';
import moment from 'moment';

import TodoSearch from 'TodoSearch'
import TodoList   from 'TodoList';
import TodoForm   from 'TodoForm';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Reactive Agenda</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-8 large-7">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
