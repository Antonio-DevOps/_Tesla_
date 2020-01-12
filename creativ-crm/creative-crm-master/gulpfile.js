'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('scss'));
});