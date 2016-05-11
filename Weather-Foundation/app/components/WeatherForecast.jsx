var React = require('react');

// Re-factor with arrow function and ES6 de-structuring

var WeatherForecast = ({location, forecast}) => {
  if(location.length > 0) {
    return (
      <div className="forecast">
        {location}: {forecast}&deg;C
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

module.exports = WeatherForecast;
