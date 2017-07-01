var gulp = require('gulp');
var pug  = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('css', function() {
    return gulp.src('src/sass/styles.scss')
           .pipe(sass())
           .pipe(gulp.dest('public/css'));
});

gulp.task('html', () => {
    return gulp.src('src/index.pug')
           .pipe(pug())
           .pipe(gulp.dest('public'));
});

gulp.task('default', ['css', 'html']);