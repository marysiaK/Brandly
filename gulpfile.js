'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//var gulpStylelint = require('gulp-stylelint');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

// gulp.task('lint-css', function lintCssTask() {
//   return gulp
//     .src('./sass/**/*.scss')
//     .pipe(gulpStylelint({
//       reporters: [
//         {formatter: 'string', console: true}
//       ]
//     }));
// });

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass', //'lint-css'
    ]);
});
