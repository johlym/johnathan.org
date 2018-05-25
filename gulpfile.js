'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./_site/**/*.html'], {base: './'})
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      processScripts: ['text/x-handlebars-template']
    }))
    .pipe(gulp.dest('./'));
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./_site/**/*.js', {base: './'})
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./'))
});

// Gulp task to minify all files
gulp.task('default', function () {
  runSequence(
    'scripts',
    'pages'
  );
});