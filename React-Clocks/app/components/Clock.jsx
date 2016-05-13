var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  },
  formatSeconds: function (time) {
    var minutes = Math.floor(time / 60),
        seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  }
});

module.exports = Clock;
