const ExtractTextPlugin     = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const path                  = require('path');

module.exports = {
    entry:{
        base        : './bin/base.js',
    },

    output: {
        path        : path.resolve(__dirname,'assets'),
        filename    : '[name].js',
    },

    devServer: {
        contentBase : path.join(__dirname, "public"),
        historyApiFallback: true,
        compress    : true,
        port        : 3005,
        open        : true,
        stats       : 'errors-only',
    },

    module: {
        rules:[
            {
                test: /\.vars.scss$/,
                loader: 'babel-loader!postcss-variables-loader'
            },
            {
                test    : /\.(scss|css)/,
                exclude: /\.vars.scss$/,
                use     : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : ['css-loader','postcss-loader','sass-loader']
                })
            },

            {
                test    : /\.(js|jsx?)$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
            },

            {
                test: /\.(ttf|eot|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },

            {
                test    : /\.(png|jpg|svg)$/,
                use     : 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('[name].css').replace('css/js', 'css');
            },
            allChunks: false
        }),
    ]
}
