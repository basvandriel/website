'use strict';

import gulp from 'gulp'

import './tasks/gulp/clean'
import './tasks/gulp/style'
import './tasks/gulp/markup'
import './tasks/gulp/scripts'
import './tasks/gulp/fonts'
import './tasks/gulp/statics'

/*
 * Clean and builds the project
 */
export const build = gulp.series(
    'clean',
    gulp.parallel('build:style', 'build:scripts', 'copy:fonts', 'copy:statics', 'build:markup')
);

/*
 * Serves up the project by watching the project for any file changes
 */
export const serve = gulp.series(
    build,
    gulp.parallel('watch:markup', 'watch:style', 'watch:scripts', 'watch:statics', 'watch:fonts')
);