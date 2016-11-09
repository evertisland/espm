var devConfig = require('./webpack.config.js');
var strip = require('strip-loader');
var strips = {
  test: [/\.js$, /\.es6$/],
  exclude: /node_modules/,
  loader: strip.loader('console.log')
};
devConfig.module.loaders.push(strips);
module.exports = devConfig;
