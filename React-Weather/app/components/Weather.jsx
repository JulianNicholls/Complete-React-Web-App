var React = require('react');

var WeatherForm     = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');
var OpenWeatherMap  = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      city:      '',
      forecast:  '',
      isLoading: false
    };
  },
  render: function () {
    var {isLoading, city, forecast} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h4>Fetching weather...</h4>;
      }
      else if(city && forecast) {
        return <WeatherForecast forecast={forecast} city={city}/>;
      }
    }
    return (
      <div className="weather">
        <h1>What's the Weather?</h1>
        <WeatherForm onUpdate={this.handleUpdates} />
        {renderMessage()}
      </div>
    )
  },
  handleUpdates: function (city) {
    var self = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getForecast(city).then(function (temp) {
      self.setState({
        city:       city,
        forecast:   temp,
        isLoading:  false
      });
    }, function (errorMessage) {
      self.setState({ isLoading: false });
      alert(errorMessage);
    });
  }
});

module.exports = Weather;
