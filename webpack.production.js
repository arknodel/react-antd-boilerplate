var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = 'production';

var webpackConfig = require('./webpack.config');

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
