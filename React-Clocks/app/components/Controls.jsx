import React from 'react';

class Controls extends React.Component {
var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  }

  render () {
    let {countdownStatus} = this.props;

    const renderStartStopButton = () => {
        if(countdownStatus === 'running') {
          return <button className="button secondary">Pause</button>;
        }
        else if(countdownStatus === "paused") {
          return <button className="button primary">Start</button>;
        }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
}
});

module.exports = Controls;
