import webpack from 'webpack';
import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
export default {
  entry:  path.resolve(__dirname, 'source/common/index.es6'),
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },

  watch: true,

  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: 'node_modules',
    //     loader: 'jshint-loader'
    //   }
    // ],

    loaders: [
      { test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' },
      { test: /\.(otf|eot|svg|ttf|woff)$/, loader: 'file' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }

}
