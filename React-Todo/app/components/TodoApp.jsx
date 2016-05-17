import React  from 'react';
import UUID   from 'node-uuid';

import TodoSearch from 'TodoSearch'
import TodoList   from 'TodoList';
import TodoForm   from 'TodoForm';

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:  false,
      searchText:     '',
      todos: [
        { id: UUID(), text: "Walk the dog" },
        { id: UUID(), text: 'Clean the yard' },
        { id: UUID(), text: "Leave mail on porch" },
        { id: UUID(), text: "Play videogames" }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <TodoForm onNewTask={this.handleAddTask}/>
      </div>
    )
  },
  handleAddTask: function (newTask) {
    this.setState({
      todos: [...this.state.todos, { id: UUID(), text: newTask }]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted:  showCompleted,
      searchText:     searchText.toLowerCase()
    });
  }
});

module.exports = TodoApp;
