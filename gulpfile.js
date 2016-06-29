var gulp = require("gulp"),
	browserify = require("browserify"),
	reactify = require("reactify"),
	source = require("vinyl-source-stream"),
	nodemon = require("gulp-nodemon"),
  sass = require('gulp-sass'),
  tinylr = require('tiny-lr'),
  server = tinylr(),
  livereload = require('gulp-livereload');

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task('html', function() {
    return gulp.src([
        'dist/index.html'
    ])
    .pipe(livereload());
});

gulp.task('js', function(){
  gulp.src('dist/*.js')
    .pipe( livereload( server ));
})


gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/css/style.css"])
        .pipe(gulp.dest("app/dist"))
        .pipe( livereload( server ));
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/dist'))
    .pipe( livereload( server ));
});
 
gulp.task('watch', function(){
    server.listen(35729, function (err) {
      if (err) {
        return console.log(err);
      }
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('dist/main.js', ['js']);
  gulp.watch('app/index.html', ['html']);
  });
});



gulp.task("start", function () {
  nodemon({
    script: './server/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task("default", ["start", "copy", "watch"],function(){
   console.log("Gulp complete..."); 
});