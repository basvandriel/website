'use strict';

/**
 * Import path dependency
 */
const path = require('path');

/**
 * Get the root path
 *
 * @type {*|*|string}
 */
const root = path.resolve(__dirname, '..');

/**
 * Get the src directory
 */
const lib = path.resolve(root, 'src');

/**
 * Return the global paths
 *
 * @type {Object}
 */
module.exports = {
    ROOT: root,
    PUBLIC: path.resolve(root, 'build'),
    LIB: lib,
    PAGES: path.resolve(lib, 'pages'),
    ASSETS: path.join(lib, 'assets'),
    VENDOR: /node_modules/
};