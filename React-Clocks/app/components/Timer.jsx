import React from 'react';

import Clock    from 'Clock';
import Controls from 'Controls';

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countStatus: 'stopped'
    };
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentDidUpdate: function (prevProps, prevState) {
    if(this.state.countStatus !== prevState.countStatus) {
      switch(this.state.countStatus) {
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
  render () {
    let {count, countStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={countStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({ countStatus: newStatus });
  }
});

module.exports = Timer;
