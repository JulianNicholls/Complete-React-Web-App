var React = require('react');

var WeatherForecast = React.createClass({
  render: function () {
    return (
      <div className="forecast">
        {this.props.forecast}
      </div>
    )
  }
});

module.exports = WeatherForecast;
