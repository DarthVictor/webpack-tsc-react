'use strict'
require('babel-polyfill')
const express = require('express')
const webpack = require('webpack')
const path = require('path')

const port = 3000
const app = express()


//Webpack hot module reloading
// Client HMR
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.client.config')
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))



// Server API HMR
const configServer = require('./webpack.server.config')
const compilerServer = webpack(configServer)
let processApi = () => {}
compilerServer.watch({}, function(err, stats) {
    if(require.resolve('./dist/bundle.server')){
        delete require.cache[require.resolve('./dist/bundle.server')]
    }
    processApi = require ('./dist/bundle.server').default
})
app.use('/api', (req, res, next) => processApi(req, res, next))


// Server rendering HMR
let renderPath = () => {}
const configServerRender = require('./webpack.server-render.config')
const compilerServerRender = webpack(configServerRender)
compilerServerRender.watch({}, function(err, stats) {
    if(require.resolve('./dist/bundle.server-render')){
        delete require.cache[require.resolve('./dist/bundle.server-render')]
    }        
    renderPath = require ('./dist/bundle.server-render').default
});

app.get('*', (req, res) => {
    res.send(renderPath(req));
})

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    else {
        console.log('App running on port ' + port + '!')
    }
})