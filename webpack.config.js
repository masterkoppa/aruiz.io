var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
      browser: APP_DIR + '/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  module: {
      rules: [{
          test: /\.md$/,
          use: [
              {loader: "html-loader"},
              {loader: "markdown-loader"}
          ]
      }, {
          test: /\.jsx?/,
          include: APP_DIR,
          loader: 'babel-loader'
      }]
  }
};

module.exports = config;
