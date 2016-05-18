import React from 'react';

import TodoTask from 'TodoTask';

var TodoList = React.createClass({
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
          <TodoTask key={task.id} {...task} onToggle={this.props.onToggle} />
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

module.exports = TodoList;
