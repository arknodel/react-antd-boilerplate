var webpack = require('webpack');
var merge = require('@ersinfotech/merge');

process.env.NODE_ENV = 'development';

var webpackConfig = require('./webpack.config');

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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
});
