import React             from 'react';
import { connect }       from 'react-redux';

import { startAddTask }  from 'actions';

export var TodoForm = React.createClass({
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="taskText" placeholder="What's on the agenda?" />
          <select ref="priority" defaultValue={3}>
            <option value="1">Highest</option>
            <option value="2">Higher</option>
            <option value="3">Normal Priority</option>
            <option value="4">Lower</option>
            <option value="5">Lowest</option>
          </select>
          <button className="button expanded">Add Task</button>
        </form>
      </div>
    );
  },
  onSubmit(evt) {
    evt.preventDefault();

    let { dispatch } = this.props,
        taskText     = this.refs.taskText.value,
        priority     = this.refs.priority.value;

    if(taskText.length > 0) {
      this.refs.form.reset();

      dispatch(startAddTask(taskText, priority));
    }
    else {
      this.refs.taskText.focus();
    }
  }
});

export default connect()(TodoForm);
