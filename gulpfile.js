var gulp = require('gulp');
// var ngHtml2Js = require("gulp-ng-html2js");
// var minifyHtml = require("gulp-minify-html");
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files', 'gulp-ng-html2js', 'gulp-minify-html'],
    replaceString: /\bgulp[\-.]/
});
var path = {
    dist: 'dist/',
    src: 'src/',
    css: 'dist/css/',
    js: 'dist/js/'
};

gulp.task('less', function () {
    gulp.src(path.src + 'angular-nps.less')
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plugins.concat('angular-nps.css'))
        .pipe(gulp.dest(path.css));
});

gulp.task('js',['templates'], function () {
    gulp.src(path.src + '*.js')
        .pipe(plugins.concat('angular-nps.js'))
        .pipe(plugins.minify({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(path.js));
});

gulp.task('watch', function () {
    return plugins.watch(path.src + '**/*.*', function () {
        gulp.start('default');
    });
});

gulp.task('templates', function () {
    console.log(plugins);
    return gulp.src("./src/partial/*.html")
        .pipe(plugins.ngHtml2js({
            moduleName: "angular-nps"
           
        }))
        .pipe(plugins.concat("angular-nps.template.js"))
        .pipe(gulp.dest("./src"));
});


gulp.task('default', ['less', 'js']);
