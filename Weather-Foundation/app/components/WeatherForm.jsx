var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div className="weather-form">
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search by location" /><br />
          <button className="button expanded hollow">Consult the Oracle</button>
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
