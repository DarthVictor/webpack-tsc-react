const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const configCommon = require('./webpack.common.config')
const config = Object.assign({}, configCommon)

config.entry = [
    'whatwg-fetch',// polyfills
    './src/serverEntry.js' //application entry point
]
config.output = Object.assign({}, config.output)
config.output.filename = 'bundle.server-render.js'
config.output.libraryTarget = 'commonjs2'

module.exports = config
