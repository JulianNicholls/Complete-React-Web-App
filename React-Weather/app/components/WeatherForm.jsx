var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div className="weather-form">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter location" /><br />
          <button>Get Forecast</button>
        </form>
      </div>
    );
  },
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';

      this.props.onUpdate(location);
    }
  }
});

module.exports = WeatherForm;
