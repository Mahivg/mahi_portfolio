var gulp = require("gulp");
var sass = require("gulp-sass");
var beautify = require("gulp-beautify");
var uglify = require("gulp-uglify");
var log = require("fancy-log");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");

gulp.task("sass", function () {
  return gulp
    .src("*.scss")
    .pipe(sass())
    .on("end", () => { log("scss converted to css...")})
    .pipe(beautify.css({indent_size: 2}))
    .on("end", () => {log("css files are beautified...")})
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    )
    .on("end", () => { log("css files are created...");
      gulp.task("minify-css", function(){
        return gulp.src("styles.css")
              .pipe(minifyCSS())
              .on('end', function(){ log('CSS files minified...'); })
              .pipe(rename("styles.min.css"))
              .pipe(gulp.dest("dist"));
      });
    });
});

gulp.task("minify-js", function(){
  return gulp.src("**/script.js")
        .pipe(uglify({
          sourceMap: true
        }))
        .on('end', function(){ log('JS files minified...'); })
        .pipe(rename("scripts.min.js"))
        .pipe(gulp.dest("dist"));
});



gulp.task("watch", function(){
  log("Watching File changes..");
  gulp.watch("*.scss", gulp.series("sass", "minify-css"));
  gulp.watch("*.js", gulp.series("minify-js"));
});

gulp.task(
  "default",
  gulp.series("sass", "watch", "minify-js", function (cb) { 
    log("Running 'sass', 'watch'... ")   
    cb();
  })
);
