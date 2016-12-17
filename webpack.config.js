const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/entry.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
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
    }
}