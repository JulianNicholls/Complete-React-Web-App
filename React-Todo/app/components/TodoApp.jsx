import React  from 'react';
import UUID   from 'node-uuid';

import TodoSearch from 'TodoSearch'
import TodoList   from 'TodoList';
import TodoForm   from 'TodoForm';

import TodoAPI    from 'TodoAPI';

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:  false,
      searchText:     '',
      todos:          TodoAPI.getTasks()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTasks(this.state.todos);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <TodoForm onNewTask={this.handleAddTask} />
      </div>
    )
  },
  handleAddTask: function (newTask) {
    this.setState({
      todos: [...this.state.todos,
        { id: UUID(), text: newTask, completed: false }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted:  showCompleted,
      searchText:     searchText.toLowerCase()
    });
  },
  handleToggle: function (id) {
    var updatedList = this.state.todos.map((task) => {
      if(task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    this.setState({ todos: updatedList });
  }
});

module.exports = TodoApp;
