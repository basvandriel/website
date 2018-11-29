'use strict';

/**
 * Use the global paths
 *
 * @type {Object}
 */
const paths = require('../paths');

/**
 * Load JS files
 *
 * @type {Object}
 */
const js = {
    test: /\.js$/,
    include: paths.LIB,
    exclude: paths.VENDOR,
    use: {
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-env']
        }
    }
};

/**
 * Load HTML by the pug extension
 *
 * @type {Object}
 */
const html = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader']
};

/**
 * Load the SCSS files
 *
 * @type {Object}
 */
const css = {
    test: /\.scss$/,
    include: paths.ASSETS,
    exclude: paths.VENDOR,
    use: [
        {
            loader: require('mini-css-extract-plugin').loader
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
};

/**
 * Export the module
 *
 * @type {Object}
 */
module.exports = [js, html, css];