/**
 * Created by wu on 2017/2/21.
 */
const path = require('path'); // 导入路径包
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'/*, // 入口文件
        vendors: ['./lib/jquery-1.7.2.min.js', './lib/swiper.min.js']*/
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
            {test: /\.html$/, loader: 'html-withimg-loader'},
            {test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[ext]'},
            {test: /\.(otf|woff|woff2|eot|ttf)$/i, loader: "file-loader?limit=8192&name=fonts/[hash:8].[ext]"}
            /*{test: /\.(jpg|png)$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},*/
            /*{test: /\.(otf|woff|woff2|eot|ttf)$/i, loader: "file-loader?limit=8192&name=[path][name].[ext]"}*/
        ]
    },
    plugins: [
        // new webpack.IgnorePlugin(/\.\/jquery-1.7.2.min.js$/),
        // new webpack.IgnorePlugin(/\.\/swiper.min.js$/),
        // new ExtractTextPlugin('./css/common.css'),
        //把入口文件里面的数组打包成vendors.js
        //new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.bundle.js'}),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),*/
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.Clipboard": "clipboard"
        }),*/
        new HtmlWebpackPlugin({
            /*minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true
            },*/
            template: './src/index.html'
        })
    ]
};