var webpack = require('webpack');
var merge = require('@ersinfotech/merge');

var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  entry: {
    app: ['webpack-hot-middleware/client'],
    login: ['webpack-hot-middleware/client'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /components/,
      }
    ],
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
});
