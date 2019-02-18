'use strict';

import gulp from 'gulp'

import './tasks/gulp/clean'
import './tasks/gulp/style'
import './tasks/gulp/markup'
import './tasks/gulp/scripts'
import './tasks/gulp/statics'

/**
 * Builds assets
 */
const buildAssets = gulp.parallel('build:style', 'build:scripts', 'copy:fonts', 'copy:statics', 'build:markup');

/**
 * Clean and builds the project
 */
export const build = gulp.series('clean', buildAssets);

/**
 * Watches the project for any file changes
 */
const watch = gulp.parallel('watch:markup', 'watch:style', 'watch:scripts', 'watch:statics');

/**
 * Serves up the project
 */
export const serve = gulp.series(build, watch);