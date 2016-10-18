import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import moment                  from 'moment';

import { startToggleTask, startRemoveTask } from 'actions';

export class TodoTask extends Component {
  render() {
    const { id, text, completed, createdAt, completedAt, priority, dispatch } = this.props;
    const taskClassName = completed ? 'task task-completed' : 'task';
    const now           = moment().unix();

    const renderDate = () => {
      let message     = 'Created ';
      let timestamp   = createdAt;

      if (completed) {
        message   = 'Completed ';
        timestamp = completedAt;
      }

      let momentStamp = moment.unix(timestamp);

      if (now - timestamp < (15 * 86400)) { // Last fortnight
        return message + momentStamp.fromNow();
      }
      else {
        return message + momentStamp.format('[at] LT [on] Do MMM YYYY');
      }
    };

    const renderRemove = () => {
      if (!completed) {
        return;
      }

      return (
        <span className="remove">
          <button onClick={(evt) => {
            evt.stopPropagation();   // If it bubbles, the task will be re-made
            dispatch(startRemoveTask(id));
          }}>
            &times;
          </button>
        </span>
      );
    };

    return (
      <div className={taskClassName} onClick={() => { dispatch(startToggleTask(id, !completed)); }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div className="text">
          <p className={`priority-${priority}`}>{text}</p>
          <span className="task__subtext">{renderDate()}</span>
        </div>
        {renderRemove()}
      </div>
    );
  }
}

export default connect()(TodoTask);
