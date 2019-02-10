import gulp from 'gulp'
import named from 'vinyl-named-with-path'
import webpack from 'webpack-stream'

import {BUILD, LIB, SCRIPTS_PATH} from '../../etc/paths'

// Build all JS files
const build = () => gulp.src([LIB + '/*.js', SCRIPTS_PATH + '/**/*.js'])
    .pipe(named())
    .pipe(webpack(require("../../etc/webpack/webpack.common")))
    .pipe(gulp.dest(BUILD + "/scripts/"));

// Register the Gulp task
gulp.task('build:scripts', build);