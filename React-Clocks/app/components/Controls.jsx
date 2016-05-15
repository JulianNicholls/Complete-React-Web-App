import React from 'react';

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange:  React.PropTypes.func.isRequired
  },
  render: function () {
    let {countdownStatus} = this.props;

    const renderStartStopButton = () => {
      if(countdownStatus === 'running') {
        return (
          <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        )
      }
      else if(countdownStatus === "paused") {
        return (
          <button className="button primary" onClick={this.onStatusChange('running')}>Start</button>
        )
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }
});

module.exports = Controls;
