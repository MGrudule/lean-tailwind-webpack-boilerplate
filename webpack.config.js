var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, './dist'),

    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',

                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }]
    },
    //settings for watching file changes
    watchOptions: {
        aggregateTimeout: 600,
        poll: 1000, // Check for changes every second
        ignored: /node_modules/ // ignore node modules to reduce CPU usage
    },
    //development server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Dev Test"
        })
    ],

};