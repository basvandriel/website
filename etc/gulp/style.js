import gulp from 'gulp'
import sass from 'gulp-sass'
import importer from 'node-sass-tilde-importer';
import clean from 'gulp-clean-css'
import path from 'path'
import post_css from 'gulp-postcss'
import auto_prefix from 'autoprefixer'

import {BUILD, STYLESHEETS} from '../paths'

/**
 * Build the sass files
 */
const build = () => gulp
    .src(path.resolve(STYLESHEETS, '**/*.scss'))
    .pipe(sass({
        importer: importer,
        style: 'compressed'
    }).on('error', sass.logError))
    .pipe(post_css([auto_prefix()]))
    .pipe(clean())
    .pipe(gulp.dest(BUILD + "/style"));

/**
 * Task: CSS Compile
 */
gulp.task('build:style', build);
gulp.task('watch:style', () => gulp.watch(STYLESHEETS, gulp.series('build:style')));