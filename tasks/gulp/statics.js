import gulp from 'gulp'
import {BUILD, FONTS_PATH, STATICS_PATH} from "../../etc/paths";

// Build the fonts
gulp.task('copy:fonts', () => gulp.src(FONTS_PATH + "/**/*").pipe(gulp.dest(BUILD + "/fonts/")));

// Build the fonts
gulp.task('copy:statics', () => gulp.src(STATICS_PATH + "/.*").pipe(gulp.dest(BUILD)));

// Watches all the static files
gulp.task('watch:statics', () => gulp.watch([FONTS_PATH, STATICS_PATH], gulp.parallel('copy:fonts', 'copy:statics')));