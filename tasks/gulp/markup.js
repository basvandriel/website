import gulp from 'gulp'
import pug from 'gulp-pug';

import {BUILD, PAGES} from '../../etc/paths'

// Build function
const build = () => gulp.src(PAGES + "/**/*.pug").pipe(pug({
    pretty: false
})).pipe(gulp.dest(BUILD));

// Task for building all pug files
gulp.task('build:markup', build);
gulp.task('watch:markup', () => gulp.watch(PAGES, gulp.series('build:markup')));