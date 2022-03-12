const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
            new HTMLWebpackPlugin({template:'./src/index.html'}),
            new CleanWebpackPlugin()
        ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/i,
                use: ["file-loader"]

            }
        ]
    }
}