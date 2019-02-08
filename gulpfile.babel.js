'use strict';

import gulp from 'gulp';
import Registry from 'gulp-hub';

/* load some gulpfiles into the registry */
gulp.registry(new Registry(['./bin/**/*.js']));