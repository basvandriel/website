/**
 * Import path dependency
 */
import path from 'path';

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
 * Get the assets path
 *
 * @type {*|string|*}
 */
const assets = path.join(lib, 'assets');

/**
 * Return the global paths
 *
 * @type {Object}
 */
export default {
    ROOT: root,
    LIB: lib,
    PAGES: path.resolve(lib, 'pages'),
    ASSETS: assets,
    PUBLIC: path.resolve(root, 'build'),
    VENDOR: /node_modules/
};