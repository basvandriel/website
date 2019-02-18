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

// Build assets task
const buildAssets = gulp.parallel('build:style', 'build:scripts', 'copy:fonts', 'copy:misc', 'build:markup');

// Add default built tasks
gulp.task('build', gulp.series('clean', buildAssets));

// Serve
gulp.task('serve', gulp.parallel('watch:markup', 'watch:style', 'watch:scripts'));