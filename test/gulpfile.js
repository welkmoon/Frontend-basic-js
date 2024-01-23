const gulp = require('gulp'); //import CommonJS
const htmlmin = require('gulp-htmlmin');

const html = () => {
    return gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
}

gulp.task('html', html);