import React  from 'react';
import moment from 'moment';

var TodoTask = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props,
        now = moment().unix();

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

    return (
      <div onClick={() => { this.props.onToggle(id); }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = TodoTask;
