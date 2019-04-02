/**
 * Node environment
 */
export const NODE_ENV = process.env.NODE_ENV || 'production';

/**
 * Check if the application runs in development mode
 *
 * @type {boolean}
 */
export const DEV_MODE = NODE_ENV === 'development';