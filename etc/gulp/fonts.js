import gulp from "gulp";
import {BUILD, FONTS_PATH} from "../paths";

// Build the fonts
gulp.task('copy:fonts', () => gulp.src(FONTS_PATH + "/*").pipe(gulp.dest(BUILD + "/fonts/")));

// Fonts watcher
gulp.task('watch:fonts', () => gulp.watch(FONTS_PATH, gulp.series('copy:fonts')));
