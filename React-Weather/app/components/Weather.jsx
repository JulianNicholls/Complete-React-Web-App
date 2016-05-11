var React = require('react');

var WeatherForm     = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');
var OpenWeatherMap  = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location:  '',
      forecast:  '',
      isLoading: false
    };
  },
  render: function () {
    var {isLoading, location, forecast} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h4>Fetching weather...</h4>;
      }
      else if(location && forecast) {
        return <WeatherForecast forecast={forecast} location={location}/>;
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
  handleUpdates: function (location) {
    var self = this;

    this.setState({ isLoading: true });

    OpenWeatherMap.getForecast(location).then(function (data) {
      self.setState({
        location:   data.location,
        forecast:   data.temp,
        isLoading:  false
      });
    }, function (errorMessage) {
      self.setState({ isLoading: false });
      alert(errorMessage);
    });
  }
});

module.exports = Weather;
