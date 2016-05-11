var React = require('react');

var WeatherForecast = (props) => {
  var {location, forecast}  = props;

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
