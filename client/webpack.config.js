const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017', 'react'],
            plugins: ["transform-decorators-legacy", "react-hot-loader/babel", "transform-class-properties"]
          }
        }
      },
      {
        test: /\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dama web',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
  devServer: {
    port: 9000,
    historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true, //实时刷新
    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  }
}
