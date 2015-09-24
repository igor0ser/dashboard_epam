var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', ['sprite', 'scss'], function(){
    gulp.watch( 'scss/**/*.scss', ['scss']);
});
 
gulp.task('scss', function () {
  return gulp.src('scss/main.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/img/sprite/*.png') 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: 'scss',
                algorithm: 'top-down',
                cssVarMap: function (sprite) {
                sprite.name = 'sprite_' + sprite.name;
}
 
            }));

    spriteData.img.pipe(gulp.dest('./img/')); 
    spriteData.css.pipe(gulp.dest('./scss/')); 
});
