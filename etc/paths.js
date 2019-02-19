'use strict';

import path from 'path';

/**
 * Get the root path
 *
 * @type {*|*|string}
 */
export const ROOT = path.resolve(__dirname, '..');

/**
 * Get the src directory
 */
export const LIB = path.resolve(ROOT, 'src');

/**
 * Get the stylesheets
 */
export const SCRIPTS_PATH = path.resolve(LIB, 'scripts/');

/**
 * Get the fonts
 */
export const FONTS_PATH = path.resolve(LIB, 'fonts');

/**
 * Get the stylesheets
 */
export const STYLESHEETS = path.resolve(LIB, 'stylesheets');

/**
 * Get the stylesheets
 */
export const PAGES = path.resolve(LIB, 'pages');

/**
 * Get the build path
 */
export const BUILD = path.resolve(ROOT, 'build');

/**
 * Vendor packages
 */
export const VENDOR_PACKAGES = /(node_modules|bower_components)/;