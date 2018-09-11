const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
  mode: process.NODE_ENV === 'production' ?
   'production' : 'development',
  entry: {
    index: [
      "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
      "./src/client/index.js",
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
  ]
}



