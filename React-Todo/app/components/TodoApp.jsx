import React from 'react';

import TodoSearch from 'TodoSearch'
import TodoList   from 'TodoList';
import TodoForm   from 'TodoForm';

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:  false,
      searchText:     '',
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
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <TodoForm onNewTask={this.handleAddTask}/>
      </div>
    )
  },
  handleAddTask: function (newTask) {
    alert("Add Task:", newTask);
    console.log('New Item:', newTask);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted:  showCompleted,
      searchText:     searchText.toLowerCase()
    });
  }
});

module.exports = TodoApp;
