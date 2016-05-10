var axios = require('axios');

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9e7c67954b17f031bb8c2d367c8c6cda&units=metric';

module.exports = {
  getForecast: function (city) {
    var encoded = encodeURIComponent(city),
        url     = `${OPEN_WEATHERMAP_URL}&q=${encoded}`;

    return axios.get(url).then(function (response) {
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }
      else {
        return response.data.main.temp;
      }
    }, function (error) {
      throw new Error(error.data.message);
    });
  }
}


// 9e7c67954b17f031bb8c2d367c8c6cda
