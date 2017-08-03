const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      main: path.resolve(__dirname, 'src/index.js'),
      vendor: ['whatwg-fetch','react','react-dom','react-router-dom','material-ui']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['es2017', 'react'],
            plugins: ["transform-decorators-legacy","transform-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'dama web',
        filename: 'index.html',
        favicon: __dirname + '/favicon.ico'
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
}
