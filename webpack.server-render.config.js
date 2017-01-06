const webpack = require('webpack')
const util = require('util')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const path = require('path')
const rootDir = path.join(__dirname, '..')


const configCommon = require('./webpack.common.config')
const config = Object.assign({}, configCommon)
config.entry = [
    'babel-polyfill', 'whatwg-fetch',// polyfills
    './src/serverEntry.js' //application entry point
]
config.output = Object.assign({}, config.output)
config.output.filename = 'bundle.server-render.js'
config.output.libraryTarget = 'commonjs2'

module.exports = config