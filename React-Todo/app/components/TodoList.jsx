import React from 'react';

import TodoTask from 'TodoTask';

var TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;

    const renderTodos = _ => {
      return todos.map((task) => {
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

module.exports = TodoList;
