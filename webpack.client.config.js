const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const configCommon = require('./webpack.common.config')
const config = Object.assign({}, configCommon)

config.entry = [
    'babel-polyfill', 'whatwg-fetch',// polyfills
    'webpack-hot-middleware/client', // hot module entry point         
    './src/clientEntry.js' //application entry point
]
config.output = Object.assign({}, config.output)
config.output.filename= 'bundle.client.js'
config.output.publicPath = '/dist/'
config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(config.plugins)

module.exports = config
