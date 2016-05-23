import React     from 'react';
import {connect} from 'react-redux';

import TodoTask  from 'TodoTask';

import TodoAPI   from 'TodoAPI';

export var TodoList = React.createClass({
  render: function () {
    let {searchText, showCompleted, tasks} = this.props;

    const renderTodos = _ => {
      if(tasks.length === 0) {
        return <p className="container__message">There's nothing on your agenda</p>;
      }

      return TodoAPI.filterTasks(tasks, showCompleted, searchText).map((task) => {
        return <TodoTask key={task.id} {...task} />;
      });
    };

    return <div>{renderTodos()}</div>;
  }
});

export default connect((state) => state)(TodoList);
