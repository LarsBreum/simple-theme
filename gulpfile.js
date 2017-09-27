'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const minifyjs = require('gulp-js-minify');
const htmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');
const image = require('gulp-image');

gulp.task('image', ['cleanImg'], () => {
	console.log('processing images');
	gulp.src(['src/images/*'])
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: false	,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./dist/images'));
});
gulp.task('cleanImg', () => {
	console.log('cleaning images');
	return gulp.src('./dist/images')
	.pipe(clean())
});

gulp.task('scss', ['cleanScss'], () => {
	console.log('processing scss');
  gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))

  .pipe(gulp.dest('./dist/css/'))
});
gulp.task('cleanScss', () => {
	return gulp.src('./dist/css')
	.pipe(clean())
});

gulp.task('js', ['cleanJs'], () => {
	console.log('processing js');
	return gulp.src('./src/js/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('app.js'))
	.pipe(minifyjs('app.js'))
	.pipe(rename('app.min.js'))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist/js'))
});
gulp.task('cleanJs', () => {
	return gulp.src('./dist/js')
	.pipe(clean())
});

gulp.task('html', ['cleanHtml'], () => {
	console.log('minifying html');
	return gulp.src('src/*.html')
	.pipe(sourcemaps.init())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
gulp.task('cleanHtml', () => {
	return gulp.src('./dist/*.html')
	.pipe(clean())
});

gulp.task('webserver', ['html', 'scss', 'js', 'image'], () => {
	gulp.src('dist')
	.pipe(webserver({
		livereload: true,
		directoryListing: false,
		open: true,
		fallback: 'index.html'
	}));
});

gulp.task('watch', () => {
	gulp.watch('./src/*.html', ['html']);
	gulp.watch('./src/scss/**/*.scss', ['scss']);
  	gulp.watch('./src/js/*.js', ['js']);
  	gulp.watch('./src/images/*', ['image']);
} );


gulp.task('default', ['webserver', 'watch'], () => {
	
});