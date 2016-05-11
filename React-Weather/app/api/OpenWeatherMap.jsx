var axios = require('axios');

// Open Weather Map has a feature which is a double-edged sword:
// It will try to interpret whatever was passed as a valid location, so
// 'asdfgh' will become Dispur, the capital of Assam state.

// This was confusing when trying to test the error-handling, to say the least!

// The place name that it is returning data for is now passed back to show when
// it is doing clever substitution. This has another advantage, because it
// capitalises the location correctly, e.g. San Francisco or Dar es Salaam.

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9e7c67954b17f031bb8c2d367c8c6cda&units=metric';

module.exports = {
  getForecast: function (location) {
    var encoded = encodeURIComponent(location),
        url     = `${OPEN_WEATHERMAP_URL}&q=${encoded}`;

    return axios.get(url).then(function (response) {
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }
      else {
        return {
          location: response.data.name,     // May not match what was typed
          temp:     response.data.main.temp // Temperature
        }
      }
    }, function (error) {
      throw new Error(error.data.message);
    });
  }
}
