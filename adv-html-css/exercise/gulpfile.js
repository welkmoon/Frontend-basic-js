import gulp from "gulp";
import htmlmin from 'gulp-htmlmin';

const html = () => {
    return gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"))
}
gulp.task('html', html);