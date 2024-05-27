var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const current_mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';

module.exports = {
  mode: current_mode,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ]
  },
  entry: {
    index: [path.resolve(__dirname, 'src/index')],
  },
  output: {
    path: path.resolve(__dirname, '_dist'),
    filename: '[name].[contenthash].js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  resolve: {
    roots: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
      __dirname,
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [      
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript',"@babel/preset-react"],
            "plugins": []
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-react", "@babel/preset-env"],
            "plugins": []
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /components/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)/i,
        use: 'file-loader?name=img_[contenthash].[ext]',
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        use: 'file-loader',
      },
      {
        test: /\.(pdf)/,
        use: 'file-loader',
      },
      {
        test: /\.(swf|xap)/,
        use: 'file-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      inject: "body",
      chunks: ['index'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/404.html'),
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      inject: "body",
      filename: '404.html',
      chunks: [],
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    })
  ],
};
