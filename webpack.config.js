var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /(\.scss$|\.sass$)/,
        include: /src/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
