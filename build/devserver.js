var webpack = require('webpack')
var DevServer = require('webpack-dev-server')
var config = require('./webpack.dev.conf')

config.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:8080/',
  'webpack/hot/dev-server'
)

var compiler = webpack(config)

var server = new DevServer(compiler, {
  contentBase: './example/',
  clientLogLevel: 'warning',
  publicPath: '/',
  hot: true,
  stats: {
    chunks: false,
    colors: true
  }
})

server.listen(8080)

module.exports = server
