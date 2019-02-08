import gulp from 'gulp'
import babel from 'gulp-babel'

import paths from '../../etc/paths'

/**
 * Build the JS files in all subdirectories
 */
const build = () => gulp.src(paths.LIB + '/scripts/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(paths.PUBLIC + "/scripts"));


gulp.task('build:scripts', build);