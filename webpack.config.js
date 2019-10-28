const {StylableWebpackPlugin} = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    plugins: [
        new StylableWebpackPlugin({
            experimentalHMR: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        port: 3001,
        hot: true
    }
}