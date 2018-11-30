'use strict';

const path  = require('path'),
      glob  = require('glob'),
      paths = require('../paths');

const HtmlWebpackPlugin    = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CleanWebpackPlugin   = require('clean-webpack-plugin');


const templates = glob.sync(path.join(paths.PAGES, '**/*.@(html|pug)')).map(filename => {
    return {
        filename, name: path.relative(path.join(paths.PAGES), filename).replace(/\.(html|pug)$/, '')
    }
});

module.exports = [
    new CleanWebpackPlugin(['build'], {
        root: paths.ROOT
    }),
    ...templates.map(t => new HtmlWebpackPlugin({
        filename: `./${t.name}.html`,
        template: path.resolve(t.filename),
        chunks: [t.name]
    })),
    new MiniCssExtractPlugin({
        filename: "style/[name].[hash].css",
        chunkFilename: "style/[id].[hash].css"
    })
];