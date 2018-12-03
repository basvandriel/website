'use strict';

const path  = require('path'),
      glob  = require('glob'),
      paths = require('../paths');

const HtmlWebpackPlugin    = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CleanWebpackPlugin   = require('clean-webpack-plugin'),
      ManifestPlugin       = require('webpack-manifest-plugin');


const templates = glob.sync(path.join(paths.PAGES, '**/*.@(html|pug)')).map(filename => {
    return {
        filename, name: path.relative(path.join(paths.PAGES), filename).replace(/\.(html|pug)$/, '')
    }
});

module.exports = [
    new CleanWebpackPlugin(['build'], {
        root: paths.ROOT
    }),
    new ManifestPlugin({ fileName: "asset-manifest.json" }),
    ...templates.map(t => new HtmlWebpackPlugin({
        filename: `./${t.name}.html`,
        template: path.resolve(t.filename),
        chunks: [t.name]
    })),
    new MiniCssExtractPlugin({
        filename: "style/[name].[hash:8].css",
        chunkFilename: "style/[name].[chunkhash:8].css"
    })
];