import React     from 'react';
import {connect} from 'react-redux';

import TodoTask  from 'TodoTask';

export var TodoList = React.createClass({
  render: function () {
    let {tasks} = this.props;

    const renderTodos = _ => {
      if(tasks.length === 0) {
        return (
          <p className="container__message">There's nothing on your agenda</p>
        );
      }

      return tasks.map((task) => {
        return (
          <TodoTask key={task.id} {...task} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect((state) => {
  return { tasks: state.tasks }
})(TodoList);
