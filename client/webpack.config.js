const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const config = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './src/index.js'),
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }], 'react'],
        },
      }],
    }],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      filename: 'index.html',
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minyChunks: 3,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      'node_modules',
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './build'),
    host: 'localhost',
    compress: true,
    hot: true,
    port: 8080,
  },
};

module.exports = config;
