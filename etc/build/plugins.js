'use strict';

const path    = require('path'),
      glob    = require('glob'),
      webpack = require('webpack'),
      paths   = require('../paths');

const HtmlWebpackPlugin    = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CleanWebpackPlugin   = require('clean-webpack-plugin'),
      ManifestPlugin       = require('webpack-manifest-plugin');


const templates = glob.sync(path.join(paths.PAGES,
                                      '**/*.@(html|pug)')).map(filename => {
    return {
        filename,
        name: path.relative(path.join(paths.PAGES),
                            filename).replace(/\.(html|pug)$/,
                                              '')
    }
});

module.exports = [
    new CleanWebpackPlugin(['build'], {root: paths.ROOT}),
    ...templates.map(t => new HtmlWebpackPlugin({
                                                    filename: `./${t.name}.html`,
                                                    template: path.resolve(t.filename),
                                                    inject: false
                                                })),
    new MiniCssExtractPlugin({
                                 filename: "style/[name].[hash:8].css",
                                 chunkFilename: "style/[name].[chunkhash:8].css"
                             }),
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new ManifestPlugin()
];