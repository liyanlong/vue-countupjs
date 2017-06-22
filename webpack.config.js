var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./build/webpack.base.conf')

module.exports = merge(baseConfig, {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'vue-countup.js',
    library: 'VueCountUp',
    libraryTarget: 'umd'
  }
})
