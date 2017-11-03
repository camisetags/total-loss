const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');
const configs = require('./configs');

module.exports = merge(common, {
  devtool: 'source-map',

  devServer: {
    port: 4000,
    contentBase: './src',
    historyApiFallback: true,
    overlay: true,
    // hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_ENDPOINT: JSON.stringify(configs.API_ENDPOINT),
      },
    }),
  ],
});
