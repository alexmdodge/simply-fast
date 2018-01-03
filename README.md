<img src="http://i.imgur.com/XGVvZxZ.png" width="800px">

A simple, fast, and extensible web app seed which incorporates bare bones tooling, styles, and plugins. The point of this setup is to include as little bloat as possible while still accommodating a modern build process. 

# Goal
The primary goal of this project is to target learners in a way that allows them to explore the entry point of modern tech stacks while still working with a static layout. This seed should be easily expandable to a project of any size!

# Introduction
This project includes,
* Webpack 3 - one of the most popular build tools with an endless supply of potential plugins and functionality
* PostCSS (CSSNext) -  lets you write future proof css without the need for previous tools like SASS/Less
* ES 6+ - write modern javascript to help simplify
* Jest - a unit testing framework developed by Facebook, it's useful for both node and browser based javascript

As more pieces are added and changed they will be updated here!

# Installation
First, like nearly all projects we'll perform an npm install. You'll need to have Node 8+
installed first which you can learn about **[here](https://nodejs.org/en/download/)**!

`npm install`

This will give you all of the plugins

# Building and Testing
All of the commands are pretty straight forward in the project. You can view them in the `package.json` file.

`npm start` will build anything in the `/src/main` folder using the `app.js` file as the [Webpack entry point](https://webpack.js.org/concepts/entry-points/).
`npm test` will run any Jest tests you've created and named as `something.test.js`.
`npm build` will do a one time build of the project instead of watching the files.
`npm serve` will simply serve the files in the `public` folder.