'use strict';

import gulp from 'gulp'

import './etc/gulp/clean'
import './etc/gulp/style'
import './etc/gulp/markup'
import './etc/gulp/scripts'
import './etc/gulp/fonts'
import './etc/gulp/statics'

/**
 * Task: Cleans and builds the project
 *
 * @param {Object} cb - Gulp callback function
 * @returns {Object}
 */
export const build = gulp.series(
    'clean',
    gulp.parallel('build:style', 'build:scripts', 'copy:fonts', 'copy:statics', 'build:markup')
);

/**
 * Task: Serves up the project by watching the project for any file changes
 *
 * @param {Object} cb - Gulp callback function
 * @returns {Object}
 */
export const serve = gulp.series(
    build,
    gulp.parallel('watch:markup', 'watch:style', 'watch:scripts', 'watch:statics', 'watch:fonts')
);