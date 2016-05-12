var React = require('react');

var WeatherForm     = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');
var OpenWeatherMap  = require('OpenWeatherMap');
var ErrorModal      = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location:  '',
      forecast:  '',
      isLoading: false,
      errorMessage: undefined
    };
  },
  render: function () {
    var {isLoading, location, forecast, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h4 className="text-center">Fetching weather...</h4>;
      }
      else if(location && forecast) {
        return <WeatherForecast forecast={forecast} location={location}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return <ErrorModal title="There was an error finding that weather" message={errorMessage} />
      }
    }

    return (
      <div className="weather">
        <h1 className="text-center">Weather Oracle</h1>
        <WeatherForm onUpdate={this.handleUpdates} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  },
  handleUpdates: function (location) {
    var self = this;

    this.setState({
      isLoading:    true,
      errorMessage: undefined
    });

    OpenWeatherMap.getForecast(location).then(function (data) {
      self.setState({
        location:   data.location,
        forecast:   data.temp,
        isLoading:  false
      });
    }, function (e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }
});

module.exports = Weather;
