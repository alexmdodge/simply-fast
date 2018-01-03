const path = require('path');

/**
 * This general config object is used by the Webpack build to
 * organize all of the different build paths and files used
 * in the project.
 * 
 * You can extend this however you would like, so long as the
 * appropriate changes are made in the webpack.config.js file.
 * 
 * Here each of the paths are used in some part of the build
 * process. You can change these paths as the project structure
 * changes.
 */
const config = {
  paths: {
    app: path.resolve(__dirname, "src/main/scripts/app.js"),
    vendor: path.resolve(__dirname, "src/main/scripts/vendor.js"),
    output: path.resolve(__dirname, "public/assets"),
  }
}

module.exports = config;