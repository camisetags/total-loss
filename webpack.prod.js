const { resolve, join } = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].bundle.[hash:8].js',
    path: resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),

    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: true,
        ecma: 7,
        warnings: false,
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
