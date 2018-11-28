const path  = require('path'),
      paths = require('../paths');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    entry: {
        index: path.resolve(paths.ROOT, 'src', 'index.js')
    },
    output: {
        path: paths.PUBLIC,
        publicPath: paths.PUBLIC,
        filename: "js/[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
                                     filename: "style/[name].[hash].css",
                                     chunkFilename: "style/[id].[hash].css"
                                 })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: paths.VENDOR,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: paths.VENDOR,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            }
        ]
    }
};

module.exports = config;