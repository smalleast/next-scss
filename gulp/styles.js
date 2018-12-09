(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles',function() {
    return gulp.src([
      'src/_flex-layout.scss',
      'src/_scss-mixins.scss',
      'src/_colors.scss',
      'src/_generators.scss'
    ])
      .pipe($.concat('index.scss'))
      .pipe(gulp.dest('dist'));
  });

}());
