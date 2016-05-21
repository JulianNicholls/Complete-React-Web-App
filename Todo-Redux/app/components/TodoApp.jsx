import React  from 'react';
import UUID   from 'node-uuid';
import moment from 'moment';

import TodoSearch from 'TodoSearch'
import TodoList   from 'TodoList';
import TodoForm   from 'TodoForm';

import TodoAPI    from 'TodoAPI';

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:  false,
      searchText:     '',
      tasks:          TodoAPI.getTasks()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTasks(this.state.tasks);
  },
  render: function () {
    let {tasks, showCompleted, searchText} = this.state,
        filteredTasks = TodoAPI.filterTasks(tasks, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Reactive Agenda</h1>

      <div className="row">
        <div className="column small-centered small-11 medium-8 large-7">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList />
            <TodoForm onNewTask={this.handleAddTask} />
          </div>
        </div>
      </div>
      </div>
    )
  },
  handleAddTask: function (newTask) {
    this.setState({
      tasks: [...this.state.tasks, {
          id:           UUID(),
          text:         newTask,
          completed:    false,
          createdAt:    moment().unix(),
          completedAt:  undefined
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted:  showCompleted,
      searchText:     searchText
    });
  }
});

module.exports = TodoApp;
