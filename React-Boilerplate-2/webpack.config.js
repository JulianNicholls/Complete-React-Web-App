var Webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new Webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:               'app/components/Main.jsx',
      Nav:                'app/components/Nav.jsx',
      Weather:            'app/components/Weather.jsx',
      About:              'app/components/About.jsx',
      Examples:           'app/components/Examples.jsx',
      WeatherForecast:    'app/components/WeatherForecast.jsx',
      WeatherForm:        'app/components/WeatherForm.jsx',
      ErrorModal:         'app/components/ErrorModal.jsx',
      applicationStyles:  'app/styles/app.scss',
      OpenWeatherMap:     'app/api/OpenWeatherMap.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
