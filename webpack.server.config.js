const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const configCommon = require('./webpack.common.config')
const config = Object.assign({}, configCommon)

config.entry = [
    //server application entry point
    './src/api/index.ts'
]
config.output = Object.assign({}, config.output)
config.output.filename = 'bundle.server.js'
config.output.libraryTarget = 'commonjs2'
config.target = 'node'

let nodeModules = {} // avoid bundling node_modules
fs.readdirSync(path.join(__dirname, 'node_modules'))
    .filter(x => x !== '.bin')
    .map(mod => nodeModules[mod] = `commonjs ${mod}`)
config.externals = nodeModules

module.exports = config

