import gulp from 'gulp'
import pug from 'gulp-pug';

import {BUILD, PAGES} from '../../etc/paths'

// Every pug file
const input = PAGES + "/**/*.pug";

// Task for building all pug files
gulp.task('build:markup', () => gulp.src(input).pipe(pug({
        pretty: false
    })).pipe(gulp.dest(BUILD))
);