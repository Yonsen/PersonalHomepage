/**
 * Created by wu on 2017/2/21.
 */
const path = require('path'); // 导入路径包
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Create multiple instances
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
    entry: {
        index: './index.js' // 入口文件
    },
    // 输出文件 build下的bundle.js
    output: {
        path: path.resolve(__dirname, 'build'),
        //publicPath: '/build/',
        filename: './js/[hash:8].js'
    },

    // 使用loader模块
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.hbs$/, loader: "handlebars-loader"},
            {test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[ext]'},
            /*{test: /\.(jpg|png)$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},*/
            {test: /\.(otf|woff|woff2|eot|ttf)$/i, loader: "file-loader?limit=8192&name=[path][name].[ext]"}
        ]
    },
    plugins: [
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.Clipboard": "clipboard"
        }),*/
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};