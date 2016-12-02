<img src="http://i.imgur.com/XGVvZxZ.png" width="800px">

A simple and performant web app seed which incorporates a number of technologies with bare bones styling and plugins. The goal of this setup is to include as little bloat as possible while still accommodating a modern build process.

# INTRODUCTION
This project includes,
* Webpack - well documented and created to incorporate only what you need
* Sass - a simple custom grid is provided with minimal styling
* ES Next - write modern javascript

As more pieces are added and changed they will be updated here!

# Contributing and Installation
If you would like to contribute to the project or poke around the source, then you're
in the right place!

First, like nearly all projects we'll perform an npm install. You'll need to have node
installed first which you can learn about **[here](https://nodejs.org/en/download/package-manager/)**!

`npm install`

Some of the command line integrations you'll need are below. Note that if you're on Ubuntu or another Linux
distribution you might need `sudo` in front of your commands. On a mac, follow **[this](https://github.com/jonathanong/osx-webdev-setup)** tutorial to ensure
that you don't have to worry about `sudo`! It also has a lot of other quick tips for setting up for web development.

[Karma](https://karma-runner.github.io/1.0/index.html) is the test runner  | `npm install -g karma-cli`
[Sass](http://sass-lang.com/install) for our style sheets | `gem install sass`
[Webpack](https://webpack.js.org/) for everything else | `npm install -g webpack`

# Building and Testing
To run a build with a Browsersync session run,

`npm start`

To run the karma tests,

`npm test`

(still have to be completed)