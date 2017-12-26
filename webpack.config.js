const path = require('path');
const config = require('./project.config.js');

module.exports = {
  entry: {
    app: config.paths.app,
    vendor: config.paths.vendor,
  },

  output: {
    path: config.paths.output,
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'babel-preset-env'
          }
        }
      }
    ],
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],

    extensions: [".js", ".json", ".css"],
  },

  devtool: "source-map",
}