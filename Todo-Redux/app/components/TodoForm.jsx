import React     from 'react';
import {connect} from 'react-redux';
import {addTask} from 'actions';

export var TodoForm = React.createClass({
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="taskText" placeholder="What's on the agenda?" />
          <button className="button expanded">Add Task</button>
        </form>
      </div>
    );
  },
  onSubmit(e) {
    e.preventDefault();

    let {dispatch} = this.props,
        taskText   = this.refs.taskText.value;

    if(taskText.length > 0) {
      this.refs.taskText.value = '';

      dispatch(addTask(taskText));
    }
    else {
      this.refs.taskText.focus();
    }
  }
});

export default connect()(TodoForm);
