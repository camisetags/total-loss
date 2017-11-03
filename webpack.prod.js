const { resolve, join } = require('path');
const merge = require('webpack-merge');
var CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.common.js');
const configs = require('./configs');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].bundle.[hash:8].js',
    path: resolve(__dirname, 'dist'),
  },

  cache: false,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_ENDPOINT: JSON.stringify(configs.API_ENDPOINT),
      },
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['babelPolyfill', 'common', 'vendor'],
      minChunks: 3,
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new webpack.NoEmitOnErrorsPlugin(),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
  ],
});
