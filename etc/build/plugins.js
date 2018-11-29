'use strict';

const path  = require('path'),
      paths = require('../paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(paths.PAGES, 'index.pug'),
        inject: true
    }),
    new MiniCssExtractPlugin({
        filename: "style/[name].[hash].css",
        chunkFilename: "style/[id].[hash].css"
    })
];