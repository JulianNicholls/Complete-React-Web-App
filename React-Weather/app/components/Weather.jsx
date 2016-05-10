var React = require('react');

var WeatherForm     = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');

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
  handleUpdates: function (updates) {
    this.setState(updates)

    // Fake it for now.
    this.setState({
      forecast: 'Cloudy and 11C'
    })
  }
});

module.exports = Weather;


// 9e7c67954b17f031bb8c2d367c8c6cda
