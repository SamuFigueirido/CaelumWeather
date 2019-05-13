const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv-webpack');
module.exports = {
    entry: './src/app/app.module.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html')
        }),
        new webpack.DefinePlugin({
            API_KEY: JSON.stringify(dotenv.parsed.API_KEY)
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        compress: true,
        port: 9000,
        publicPath: '/dist/'
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
                options: {
                    name: 'img/[name].[ext]'
                }
            }
        ]
    }
}