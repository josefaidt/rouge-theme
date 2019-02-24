const gulp = require('gulp')
const strip = require('gulp-strip-comments')

gulp.task('default', () => {
  return gulp
    .src('src/rouge/*.json')
    .pipe(strip())
    .pipe(gulp.dest('themes/'))
})

gulp.task('watch', () => {
  gulp.watch('src/rouge/*.json', ['default'])
})
