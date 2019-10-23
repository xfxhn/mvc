const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: [".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, "lib"),
        hot: true,
        compress: true, //一切服务都启用gzip 压缩：
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'MVC.js',
        path: path.resolve(__dirname, 'lib'),
        library: "surge",
        libraryTarget: "umd"
    }
}
;