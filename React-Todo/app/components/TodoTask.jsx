import React from 'react';

var TodoTask = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} readOnly={true} />
        {text}
      </div>
    )
  }
});

module.exports = TodoTask;
