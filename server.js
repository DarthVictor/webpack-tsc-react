'use strict'

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

app.get('/', (req, res) => {
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