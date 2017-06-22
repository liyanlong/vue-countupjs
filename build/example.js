var webpack = require('webpack')

var config = require('./webpack.config.dev.js')

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
])

module.exports = config
