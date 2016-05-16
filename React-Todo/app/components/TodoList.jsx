import React from 'react';

import TodoEntry from 'TodoEntry';

var TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;

    const renderTodos = _ => {
      return todos.map((entry) => {
        return (
          <TodoEntry key={entry.id} {...entry} />
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
