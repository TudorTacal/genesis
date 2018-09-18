const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ?
    'production' : 'development',
  entry: {
    index: process.env.NODE_ENV === 'production' ?
      "./src/client/production-index.js" :
      [
        "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
        "./src/client/development-index.js",
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
    new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } })
  ]
}



