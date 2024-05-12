'use strict';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
const sass = gulpSass(dartSass);

const dirs = {
  src: './scss/',
  dest: './app/style/'
}

gulp.task('sass', () => {
  return gulp.src(dirs.src+'*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(dirs.dest))
})

gulp.task('watch', gulp.series('sass', (done) => {
  gulp.watch(folder.scss+'*.scss', gulp.series('sass'));
  done();
}));

