var React = require('react');

var About = (props) =>
  <div>
    <h1 className="text-center page-title">About Weather Oracle</h1>

    <p>Consult the oracle to find out the temperature for your chosen location,
      anywhere in the world. The weather information is taken
      from <a href="http://openweathermap.org">OpenWeatherMap</a>.</p>

    <p>OpenWeatherMap does a great job of interpreting where you mean if you
      misspell a location when you enter it.</p>

    <p>This application was developed using React. Here are some of the tools that I used:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a>
      </li>
      <li>
        <a href="https://atom.io/">Atom Editor</a>
      </li>
      <li>
        <a href="https://nodejs.org/">Node</a>
      </li>
    </ul>
  </div>

module.exports = About;
