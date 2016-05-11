var React = require('react');

var About = (props) =>
  <div>
    <h2>About Weather</h2>

    <p>Gather weather data for a given location from <a href="http://openweathermap.org">OpenWeatherMap</a>.</p>

    <p>If a misspelled location is entered, an attempt is made to interpret the
    desired location.</p>
  </div>

module.exports = About;
