var path = require('path')
var webpack = require('webpack')
var rm = require('rimraf')
var ora = require('ora')
var chalk = require('chalk')
var merge = require('webpack-merge')
var devWebpackConfig = require('./webpack.dev.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpackConfig = merge(devWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../docs/'),
    publicPath: './',
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html',
      inject: true
    })
  ]
})

var spinner = ora('building docs...\n')
spinner.start()
rm(path.join(__dirname, '../docs/'), function (err) {
  if (err) {
    throw err
  }
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan(' Build complete. \n'))
  })
})