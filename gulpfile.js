var gulp = require("gulp"),
	browserify = require("browserify"),
	reactify = require("reactify"),
	source = require("vinyl-source-stream"),
	nodemon = require("gulp-nodemon"),
  sass = require('gulp-sass');

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/css/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
});


gulp.task("start", function () {
  nodemon({
    script: './server/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task("default", ["start", "copy", "sass:watch"],function(){
   console.log("Gulp complete..."); 
});