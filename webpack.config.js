const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Good Food: Bar and Grill",
            template: './src/template.html',
        }),
    ],
    optimization: {
        runtimeChunk: 'single'
    }
}