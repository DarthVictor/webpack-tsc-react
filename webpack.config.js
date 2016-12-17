const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/entry.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',                
                query: {
                    presets: ['es2015'],                    
                    plugins: ['transform-async-to-generator']
                }
            },
            { 
                test: /\.css$/, 
                loader: 'style!css' 
            }
        ]
    }
}