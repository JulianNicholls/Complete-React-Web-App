import React        from 'react';
import { connect }  from 'react-redux';
import moment       from 'moment';

import { toggleTask, removeTask } from 'actions';

export var TodoTask = React.createClass({
  render() {
    var { id, text, completed, createdAt, completedAt, dispatch, priority } = this.props,
        taskClassName = completed ? 'task task-completed' : 'task',
        now           = moment().unix();

    const renderDate = () => {
      let message     = 'Created ',
          timestamp   = createdAt;

      if(completed) {
        message   = 'Completed ';
        timestamp = completedAt;
      }

      let momentStamp = moment.unix(timestamp);

      if(now - timestamp < (15 * 86400)) { // Last fortnight
        return message + momentStamp.fromNow();
      }
      else {
        return message + momentStamp.format('h:mma Do MMM YY')
      }
    };

    const renderRemove = () => {
      if(!completed) {
        return;
      }

      return (
        <div className="remove">
          <button onClick={() => { dispatch(removeTask(id)); }}>&times;</button>
        </div>
      );
    }

    return (
      <div className={taskClassName} onClick={() => { dispatch(toggleTask(id)); }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p className={`priority-${priority}`}>{text}</p>
          <span className="task__subtext">{renderDate()}</span>
        </div>
        {renderRemove()}
      </div>
    )
  }
});

export default connect()(TodoTask);
