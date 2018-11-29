import {DEV_MODE} from "../common";
import path from 'path';
import paths from '../paths';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 *
 */
const plugins = [
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

const config = {
    mode: DEV_MODE ? 'development' : 'production',
    entry: {
        master: path.resolve(paths.ROOT, 'src', 'master.js')
    },
    output: {
        path: paths.PUBLIC,
        filename: DEV_MODE ? "js/[name].js" : "js/[name].[chunkhash].js",
        chunkFilename: DEV_MODE ? "js/[name].js" : "js/[name].[chunkhash].js",
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: 'initial',
                vendors: {
                    test: paths.VENDOR,
                    name: 'vendors'
                },
            }
        }
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: paths.LIB,
                exclude: paths.VENDOR,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.pug$/,
                use: ['html-loader?attrs=false', 'pug-html-loader']
            },
            {
                test: /\.scss$/,
                include: paths.ASSETS,
                exclude: paths.VENDOR,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: false,
                            plugins: (() => {
                                return [
                                    require('autoprefixer')(),
                                    require('cssnano')({
                                        preset: ['default', {
                                            minifySelectors: true
                                        }]
                                    })
                                ]
                            })()
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            }
        ]
    }
};

export default config;