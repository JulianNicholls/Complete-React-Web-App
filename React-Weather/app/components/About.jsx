var React = require('react');

// Total re-factor for a simple presentational Component

var About = (props) =>
  <div>
    <h2>About Component</h2>

    <p>Gather weather data for a given location from <a href="http://openweathermap.org">OpenWeatherMap</a>.</p>

    <p>If a misspelled location is entered, an attempt is made to interpret the
    desired location.</p>
  </div>

module.exports = About;
