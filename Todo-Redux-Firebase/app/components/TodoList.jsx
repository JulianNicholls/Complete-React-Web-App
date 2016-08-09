import React       from 'react';
import { connect } from 'react-redux';

import TodoTask    from 'TodoTask';

import TodoAPI     from 'TodoAPI';

export var TodoList = React.createClass({
  render() {
    let {searchText, showCompleted, tasks} = this.props;

    const renderTodos = () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, showCompleted, searchText);

      if(filteredTasks.length === 0) {
        return <p className="container__message">There's nothing on your agenda</p>;
      }

      return filteredTasks.map((task) => {
        return <TodoTask key={task.id} {...task} />;
      });
    };

    return <div>{renderTodos()}</div>;
  }
});

export default connect((state) => state)(TodoList);
