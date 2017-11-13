const { resolve, join } = require('path');
const { NoEmitOnErrorsPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const configs = require('./configs');

const extractSCSS = new ExtractTextPlugin({
  filename: '[name]-[hash:8].css',
  publicPath: resolve(__dirname, 'build'),
});

module.exports = {
  entry: {
    vendor: [...configs.vendorChunks],
    babelPolyfill: 'babel-polyfill',
    app: './src/app/index.jsx',
  },

  output: {
    filename: '[name].[hash:8].js',
    path: resolve(__dirname, 'dist'),
  },

  resolve: {
    modules: [
      resolve(__dirname, 'node_modules'),
      resolve(__dirname, 'src/app'),
      resolve(__dirname, 'src/images'),
      resolve(__dirname, 'src/styles'),
    ],
    alias: {
      assets: resolve(__dirname, 'src/images'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)/,
        use: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader',
        },
        include: [resolve(__dirname, './src/app')],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: extractSCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        // use: ['file-loader'],
        use: ['file-loader?context=src/images&name=images/[path][hash:8].[ext]'],
        exclude: /node_modules/,
        include: resolve(__dirname, './src/images'),
      },
    ],
  },

  plugins: [
    new NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
      path: resolve(__dirname, 'build'),
      filename: 'index.html',
    }),
    extractSCSS,
  ],
};
