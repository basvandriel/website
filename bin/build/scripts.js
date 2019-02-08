import gulp from 'gulp'
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import paths from '../../etc/paths'

/**
 * Build the JS files in all subdirectories
 */
const build = () => gulp.src(paths.LIB + '/scripts/**/*.js')
    .pipe(webpack(require('../../etc/build/webpack.config'), null))
    .pipe(named())
    .pipe(gulp.dest(paths.PUBLIC + "/scripts"));


gulp.task('build:scripts', build);