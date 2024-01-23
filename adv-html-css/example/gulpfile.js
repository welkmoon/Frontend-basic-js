// const gulp = require('gulp');
// const htmlmin = require('gulp-htmlmin');
// const concat = require('gulp-concat');
// const terser = require('gulp-terser');
// const cleanCSS = require('gulp-clean-css');
// const clean = require('gulp-clean');
// const browserSync = require('browser-sync').create();
// const imagemin = require('gulp-imagemin');

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import clean from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import bs from 'browser-sync';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const browserSync = bs.create();

function scss() {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('.dist/css'));
  };

const cleanDist = () => {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
}

const imgMin  = () => {
    return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

const html = () => {
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
}

const js = () => {
    return gulp.src('./src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(terser({
            keep_fnames: true,
            mangle: false
        }))
        .pipe(gulp.dest('./dist/js'))
}

const css = () => {
    return gulp.src('./src/**/*.css')
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
}

const dev = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('./src/**/*', gulp.series(cleanDist, gulp.parallel(html, css, js), (next) => { 
        browserSync.reload(); 
        next();
    }))
}

gulp.task('img', imgMin);
gulp.task('scss', scss);

gulp.task('build', gulp.series(cleanDist, gulp.parallel(html, js, css)));
gulp.task('dev', gulp.series('build', dev));