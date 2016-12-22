const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
         'babel-polyfill', // polyfills
         'webpack-hot-middleware/client', // hot module entry point         
         './src/entry.js' //application entry point
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    watch: true,
    resolve: {
        /* 
        Add '.ts' as resolvable extension.
         Without this line you will have problems like this        
         'Module not found: Error: Cannot resolve 'file' or 'directory' ./MyComponent in \src\components'
         then importing files without extensions, for example using ./MyComponent instead ./MyComponent.tsx
         */
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            { 
                test: /\.css$/, 
                loader: 'style!css' 
            }
        ]
    },
    plugins: [
            new webpack.HotModuleReplacementPlugin() // provide HMR in bundles
    ]    
}