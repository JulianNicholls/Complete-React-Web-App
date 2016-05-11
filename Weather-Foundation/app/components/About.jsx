var React = require('react');

var About = (props) =>
  <div>
    <h2>About Weather Oracle</h2>

    <p>Ask the oracle to gather weather data for a given location
      from <a href="http://openweathermap.org">OpenWeatherMap</a>.</p>

    <p>If a misspelled place is entered, an attempt is made to interpret the
    desired location.</p>
  </div>

module.exports = About;
