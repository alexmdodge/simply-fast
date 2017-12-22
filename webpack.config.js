const path = require('path');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: "./src/scripts/vendor.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/assets/",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
      },
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