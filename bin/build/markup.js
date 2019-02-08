import gulp from 'gulp'
import pug from 'gulp-pug';

import paths from '../../etc/paths'

/**
 * Build the pug files in all subdirectories
 */
gulp.task('build:pug', () => gulp.src(paths.PAGES + '/**/*.pug').pipe(pug({
        pretty: false
    })).pipe(gulp.dest(paths.PUBLIC))
);