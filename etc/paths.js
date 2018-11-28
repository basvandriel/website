const path = require('path');

/**
 * Get the root path
 *
 * @type {*|*|string}
 */
const root = path.resolve(__dirname, '..');

/**
 * Get the assets path
 *
 * @type {*|string|*}
 */
const assets = path.join(root, 'src/assets');

/**
 * Return the global paths
 *
 * @type {Object}
 */
const paths = {
    ROOT: root,
    ASSETS: assets,
    PUBLIC: path.resolve(root, 'build'),
    VENDOR: /node_modules/
};

/**
 * Export
 *
 * @type {Object}
 */
module.exports = paths;