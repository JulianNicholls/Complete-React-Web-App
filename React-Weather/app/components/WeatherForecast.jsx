var React = require('react');

var WeatherForecast = React.createClass({
  render: function () {
    var {city, forecast}  = this.props;

    if(city.length > 0) {
      return (
        <div className="forecast">
          {city}: {forecast}
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
});

module.exports = WeatherForecast;
