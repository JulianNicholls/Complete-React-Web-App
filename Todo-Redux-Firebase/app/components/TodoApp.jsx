import React      from 'react';

import TodoSearch from 'TodoSearch';
import TodoList   from 'TodoList';
import TodoForm   from 'TodoForm';

var TodoApp = () =>
  <div>
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

module.exports = TodoApp;
