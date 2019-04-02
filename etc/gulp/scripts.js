import gulp from 'gulp'
import named from 'vinyl-named-with-path'
import webpack from 'webpack-stream'

import {BUILD, LIB, SCRIPTS_PATH} from '../paths'


// Register the Gulp task
gulp.task('build:scripts', () => gulp.src([LIB + '/*.js', SCRIPTS_PATH + '/**/*.js'])
    .pipe(named())
    .pipe(webpack({
            mode: "production",
            module: {
                rules: [

                    {
                        test: /\.js?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                    },
                ],
            },
        }
    ))
    .pipe(gulp.dest(BUILD + "/scripts/")));

gulp.task('watch:scripts', () => gulp.watch(SCRIPTS_PATH, gulp.series('build:scripts')));