var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/scripts/app.js',
  output: {
    path: './src/scripts',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    } , { 
      test: /\.css$/,
      loader: "style!css" 
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),

    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['src'] }
    })
  ]
 };