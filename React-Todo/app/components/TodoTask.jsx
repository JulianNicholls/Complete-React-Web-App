import React from 'react';

var TodoTask = React.createClass({
  render: function () {
    var {id, text} = this.props;

    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = TodoTask;
