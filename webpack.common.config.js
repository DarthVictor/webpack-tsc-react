const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [],
    output: {
        path: path.join(__dirname, 'dist')
    },
    watch: true,
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [            
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'ts-loader']
            },
            { 
                test: /\.css$/, 
                loader: 'style!css' 
            }
        ]
    },
    plugins: []    
}