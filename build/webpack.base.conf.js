var path = require('path')
var webpack = require('webpack')

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-countupjs$': path.resolve(__dirname, '../src/index')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'production' ? '"production"' : '"development"'
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ])
}