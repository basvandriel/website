'use strict';

const path  = require('path'),
      paths = require('../paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Paths to clean on build
 */
const pathsToClean = [
    'build'
];

module.exports = [
    new CleanWebpackPlugin(pathsToClean, {
        root: paths.ROOT
    }),
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