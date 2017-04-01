const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const config = {
  devtool: 'source-map',  // 生成source map以追踪js错误
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist',
    filename: '[name].[chunkhash:8].js',
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      filename: 'index.html',
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minyChunks: 3,
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
  ],
};

module.exports = config;
