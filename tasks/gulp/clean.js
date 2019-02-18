import gulp from 'gulp'
import del from 'del'

import {BUILD} from '../../etc/paths'

/**
 * Clean the build directory
 */
gulp.task('clean', (cb) => del(BUILD, cb));