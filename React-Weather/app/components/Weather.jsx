var React = require('react');

var WeatherForm     = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      city:     '',
      forecast: ''
    };
  },
  getInitialState: function () {
    return {
      city:     this.props.city,
      forecast: this.props.forecast
    };
  },
  render: function () {
    return (
      <div className="weather">
        <h1>What's the Weather?</h1>
        <WeatherForm onUpdate={this.handleUpdates} />
        <WeatherForecast forecast={this.state.forecast} />
      </div>
    )
  },
  handleUpdates: function (updates) {
    this.setState(updates)
  }
});

module.exports = Weather;
