const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const environmentConfig = require('./config/environment.dev.config');

module.exports = {
  entry: path.resolve(__dirname, 'src/frontend/index.tsx'),

  watch: true,

  mode: 'development',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    port: 3000
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=img/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader?sourceMap',
          {
            loader: 'postcss-loader',
            options: {
              options: {}
            }
          },
          'resolve-url-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
      AUTH_HOST: JSON.stringify(environmentConfig.AUTH_HOST),
      EMPLOYEES_HOST: JSON.stringify(environmentConfig.EMPLOYEES_HOST)
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/frontend/index.html'),
      inject: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
