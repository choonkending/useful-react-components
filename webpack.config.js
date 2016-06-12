var path = require('path');
var webpack = require('webpack');
var PRODUCTION = process.env.NODE_ENV === 'production';

var config = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_HREF: PRODUCTION ? JSON.stringify("/useful-react-components/") : JSON.stringify("/")
    })
  ],
  postcss: function() {
    return [
      require('postcss-simple-vars')(),
      // Unwrap nested rules like how Sass does it
      require('postcss-nested')(),
      //  parse CSS and add vendor prefixes to CSS rules
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      // A PostCSS plugin to console.log() the messages registered by other
      // PostCSS plugins
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  }
};

if (!PRODUCTION) {
  config.entry = [].concat([
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ], config.entry);

  config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
}

module.exports = config;
