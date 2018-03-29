const webpack = require('webpack');
const path = require('path');

const entry = [
  './src/index.js'
];

const output = {
  path: path.resolve(__dirname, '/client'),
  publicPath: '/client',
  filename: 'bundle.js',
};

module.exports = {
  entry, output,
  devtool: "eval-source-map",
  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
};

