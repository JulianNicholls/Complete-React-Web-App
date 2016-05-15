import React from 'react';

import Clock         from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls      from 'Controls';

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentDidUpdate: function (prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'running':
          this.startTimer();
          break;

        case 'stopped':
          this.setState({ count: 0 });
          // Fall through

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  render: function () {
    let {count, countdownStatus} = this.state;

    const renderControlsArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      }
      else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    }

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlsArea()}
      </div>
    )
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'running'
    });
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;

      this.setState({ count: newCount >= 0 ? newCount : 0 });

      if(newCount === 0) {
        this.setState({ countdownStatus: 'stopped' });
      }
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({ countdownStatus: newStatus });
  }
});

module.exports = Countdown;
