import gulp from 'gulp'
import del from 'del'
import paths from '../etc/paths'

/**
 * Clean the build directory
 */
gulp.task('clean', (cb) => del.sync(paths.PUBLIC) || cb());