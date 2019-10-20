const gulp = require('gulp');
const clean = require('gulp-clean');
const ghPages = require('gulp-gh-pages');

const preDeploy = () => {
  return gulp.src(['./node_modules/gulp-gh-pages/node_modules/gift/*'], {
      read: false
    })
    .pipe(clean());
}

const doDeploy = () => {
  return gulp.src('./dist/welcome/**/*')
    .pipe(ghPages({ force: true, message: 'update' }));
}

exports.deploy = gulp.series(
  preDeploy,
  doDeploy
);
