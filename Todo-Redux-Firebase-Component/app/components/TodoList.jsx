import React, { Component }  from 'react';
import { connect }           from 'react-redux';

import TodoTask              from 'TodoTask';
import TodoAPI               from 'TodoAPI';

export class TodoList extends Component {
  render() {
    const { searchText, showCompleted, tasks } = this.props;

    const renderTodos = () => {
      const filteredTasks = TodoAPI.filterTasks(tasks, showCompleted, searchText);

      if(filteredTasks.length === 0) {
        return <p className="container__message">There's nothing on your agenda</p>;
      }

      return filteredTasks.map((task) => {
        return <TodoTask key={task.id} {...task} />;
      });
    };

    return <div>{renderTodos()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    searchText:     state.searchText,
    showCompleted:  state.showCompleted,
    tasks:          state.tasks
  };
}

export default connect(mapStateToProps)(TodoList);
