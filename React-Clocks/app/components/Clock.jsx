var React = require('react');

var Clock = React.createClass({
  render: function () {
    return (
      <div></div>
    );
  },
  formatSeconds: function (time) {
    var minutes = Math.floor(time / 60),
        seconds = time % 60;

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
});

module.exports = Clock;
