import React from 'react';

import TodoList from 'TodoList';
import TodoForm from 'TodoForm';

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        { id: 1, text: "Walk the dog" },
        { id: 2, text: 'Clean the yard' },
        { id: 3, text: "Leave mail on porch" },
        { id: 4, text: "Play videogames" }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <TodoForm onNewTask={this.handleAddTask}/>
      </div>
    )
  },
  handleAddTask: function (newEntry) {
    console.log('New Item:', newEntry);
  }
});

module.exports = TodoApp;
