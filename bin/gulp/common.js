import gulp from 'gulp'
import {BUILD, FONTS_PATH, LIB} from "../../etc/paths";

// Build the fonts
gulp.task('copy:fonts', () => gulp
    .src(FONTS_PATH + "/**/*")
    .pipe(gulp.dest(BUILD + "/fonts/")));

// Build the fonts
gulp.task('copy:misc', () => gulp
    .src(LIB + "/.*")
    .pipe(gulp.dest(BUILD)));

// Add default built tasks
gulp.task('build:assets', gulp.parallel('build:style', 'build:scripts', 'copy:fonts', 'copy:misc'));
gulp.task('build', gulp.series('clean', gulp.parallel('build:assets', 'build:markup')));
