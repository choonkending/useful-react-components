var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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

