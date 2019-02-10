import gulp from 'gulp'
import {BUILD, FONTS_PATH, LIB} from "../../etc/paths";

// Build the fonts
gulp.task('copy:fonts', () => gulp
    .src(FONTS_PATH + "/**/*")
    .pipe(gulp.dest(BUILD + "/fonts/")));

// Build the fonts
gulp.task('copy:misc', () => gulp
    .src(LIB + "/*")
    .pipe(gulp.dest(BUILD)));