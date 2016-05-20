import React from 'react';

var TodoForm = React.createClass({
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="task" placeholder="What's on the agenda?" />
          <button className="button expanded">Add Task</button>
        </form>
      </div>
    );
  },
  onSubmit: function (e) {
    e.preventDefault();

    let task = this.refs.task.value;

    if(task.length > 0) {
      this.refs.task.value = '';

      this.props.onNewTask(task);
    }
    else {
      this.refs.task.focus();
    }
  }
});

module.exports = TodoForm;
