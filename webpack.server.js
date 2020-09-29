const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.es\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        use: ['css-loader', ],
      },
      // Font-awesome 4.7.X
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [/vendors/, /img/],
        loader: 'file-loader?name=/fonts/[name].[ext]',
      },
      // MDB
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [/node_modules/, /img/],
        loader: 'file-loader?name=font/roboto/[name].[ext]',
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          useRelativePath: true,
        },
      },
    ],

  }
};