var React = require('react');

// Re-factor with arrow function and ES6 de-structuring

var WeatherForecast = ({location, forecast}) => {
  if(location.length > 0) {
    return <h3 className="text-center">It's {forecast}&deg;C in {location}</h3>
  }
  else {
    return <div></div>
  }
}

module.exports = WeatherForecast;
