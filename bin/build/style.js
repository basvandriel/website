import gulp from 'gulp'
import sass from 'gulp-sass'
import importer from 'node-sass-tilde-importer';
import clean from 'gulp-clean-css'
import post_css from 'gulp-postcss'
import auto_prefix from 'autoprefixer'

import paths from '../../etc/paths'

/**
 * Build the sass files
 *
 * @returns {void}
 */
const build = () => gulp
    .src(paths.ASSETS + '/style/**/*.scss')
    .pipe(sass({
        importer: importer,
        style: 'compressed'
    }).on('error', sass.logError))
    .pipe(post_css([auto_prefix()]))
    .pipe(clean())
    .pipe(gulp.dest(paths.PUBLIC + "/style"));

/**
 * Task: CSS Compile
 */
gulp.task('build:style', build);