// const config = {} // тоже самое что и module.exports
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("@babel/polyfill");

module.exports = {
    mode:'development',
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname,'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'src/index.html')
    }),new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
    })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.jsx','.js'],
        preferAbsolute: true,
        modules: [path.resolve(__dirname,'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
}