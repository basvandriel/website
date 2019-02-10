'use strict';

import gulp from 'gulp';
import require_dir from 'require-dir';


// Require all the Gulp tasks
require_dir('./bin/gulp', {recurse: true});

// Add default built tasks
gulp.task('build:fonts', gulp.parallel('build:style', 'build:markup', 'build:scripts'));
gulp.task('build', gulp.series('clean', gulp.parallel('build:fonts', 'build:markup')));