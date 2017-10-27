const { resolve, join } = require('path');
const { NoEmitOnErrorsPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const flowPlugin = new FlowWebpackPlugin({
  failOnError: false,
  failOnErrorWatch: false,
  printFlowOutput: true,
  flowPath: require.main.require('flow-bin'),
  flowArgs: ['--color=always'],
  verbose: false,
  callback: (result) => {},
});

module.exports = {
  entry: {
    babelPolyfill: 'babel-polyfill',
    app: './src/app/index.jsx',
  },

  output: {
    filename: '[name].[hash:8].js',
    path: resolve(__dirname, 'dist'),
  },

  resolve: {
    modules: [join(__dirname, 'src'), 'node_modules'],
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new NoEmitOnErrorsPlugin(),
    flowPlugin,
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
      path: resolve(__dirname, 'build'),
      filename: 'index.html',
    }),
  ],
};
