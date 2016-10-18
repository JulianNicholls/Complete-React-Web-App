import React, { Component }      from 'react';
import { connect }               from 'react-redux';

import * as actions              from 'actions';

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

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
  }

  onSubmit(evt) {
    evt.preventDefault();

    const taskText   = this.refs.taskText.value;
    const priority   = this.refs.priority.value;

    if (taskText.length > 0) {
      this.refs.form.reset();

      this.props.startAddTask(taskText, priority);
    }
    else {
      this.refs.taskText.focus();
    }
  }
}

export default connect(null, actions)(TodoForm);
