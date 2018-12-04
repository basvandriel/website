const path = require('path');

const config = require('../common'),
      paths  = require('../paths');

module.exports = {
    mode: config.NODE_ENV,
    entry: {
        index: path.resolve(paths.LIB, 'scripts', 'index.js'),
        about: path.resolve(paths.LIB, 'scripts', 'about.js')
    },
    output: {
        path: paths.PUBLIC,
        filename: config.DEV_MODE ? "js/[name].js" : "js/[name].[chunkhash:8].js",
        chunkFilename: config.DEV_MODE ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    },
    optimization: require('./optimization'),
    stats: {
        colors: true,
        hash: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: false,
    },
    plugins: require('./plugins'),
    module: {
        rules: require('./rules')
    }
};