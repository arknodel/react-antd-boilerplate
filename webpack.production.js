var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
      exclude: /components/,
    }],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ],
});
