/**
 * Node environment
 */
const NODE_ENV = process.env.NODE_ENV || 'production';

/**
 * Check if the application runs in development mode
 *
 * @type {boolean}
 */
const DEV_MODE = NODE_ENV === 'development';

/**
 * Export the modules
 *
 * @type {Object}
 */
module.exports = {
    NODE_ENV, DEV_MODE
};