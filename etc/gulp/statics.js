import gulp from 'gulp'
import {BUILD, LIB} from "../paths";

// Build the fonts
gulp.task('copy:statics', () => gulp.src([LIB + "/*.*", "!" + LIB + "/*.js"]).pipe(gulp.dest(BUILD)));

// Watches all the static files
gulp.task('watch:statics', () => gulp.watch(LIB, gulp.series('copy:statics')));