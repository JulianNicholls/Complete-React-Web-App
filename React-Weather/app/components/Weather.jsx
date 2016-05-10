var React = require('react');

var WeatherForm     = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');
var OpenWeatherMap  = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      city:     '',
      forecast: ''
    };
  },
  render: function () {
    var {city, forecast} = this.state;

    return (
      <div className="weather">
        <h1>What's the Weather?</h1>
        <WeatherForm onUpdate={this.handleUpdates} />
        <WeatherForecast forecast={forecast} city={city}/>
      </div>
    )
  },
  handleUpdates: function (city) {
    var self = this;

    OpenWeatherMap.getForecast(city).then(function (temp) {
      self.setState({
        city:     city,
        forecast: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  }
});

module.exports = Weather;
