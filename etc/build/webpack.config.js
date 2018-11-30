const path = require('path');

const config = require('../common'),
      paths  = require('../paths');

const plugins = require('./plugins'),
      rules   = require('./rules');

/**
 * Optimization for webpack
 *
 * @type {Object}
 */
const optimization = {
    splitChunks: {
        cacheGroups: {
            chunks: 'initial',
            vendors: {
                test: paths.VENDOR,
                name: 'vendors'
            },
        }
    }
};

module.exports = {
    mode: config.DEV_MODE ? 'development' : 'production',
    entry: {
        index: path.resolve(paths.LIB, 'scripts', 'index.js'),
        about: path.resolve(paths.LIB, 'scripts', 'about.js'),
    },
    output: {
        path: paths.PUBLIC,
        filename: config.DEV_MODE ? "js/[name].js" : "js/[name].[chunkhash].js",
        chunkFilename: config.DEV_MODE ? "js/[name].js" : "js/[name].[chunkhash].js",
    },
    optimization: optimization,
    stats: {children: false},
    plugins: plugins,
    module: {
        rules: rules
    }
};