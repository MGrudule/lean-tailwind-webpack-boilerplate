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
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                        // `resourcePath` - `/absolute/path/to/file.js`
                        // `resourceQuery` - `?foo=bar`

                        if (process.env.NODE_ENV === 'development') {
                            return 'img/[name].[ext]';
                        }

                        return '[contenthash].[ext]';
                    },
                },
            },
        ]
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