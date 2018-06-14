'use strict'

const gulp = require('gulp')
const strip = require('gulp-strip-comments')
 
gulp.task('default', () => {
  return gulp.src('src/themes/*.json')
    .pipe(strip())
    .pipe(gulp.dest('themes/'))
})