// 'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig () {

  var config = {};

  config.entry = {
      app: ['babel-polyfill', './src/app.js']
  };


  config.output = {
    path: isProd ? 'Z:/ambientes/jgutierrez/maxideli-mobile' : __dirname + '/dist',
    publicPath: isProd ? 'http://desarrollo.maxisistemas.com.ar/ambientes/jgutierrez/maxideli-mobile/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
   config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  config.module = {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  };
  config.sassLoader= {
    includePaths: [path.resolve(__dirname, "./sass")]
  };

  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  config.plugins = [];


  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].[hash].css', {disable: !isProd})
  )

  if (isProd) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        'ng': 'angular',
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
        'Hammer': 'hammerjs/hammer'
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/src'
      }])
   )
  }

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };
  config.externals = {
    $: 'jquery',
    ng: 'angular',
    materializecss: 'materialize-css'
  }

  return config;
}();
