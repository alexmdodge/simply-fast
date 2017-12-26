const path = require('path');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: "./src/scripts/vendor.js",
  },

  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
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