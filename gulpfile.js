/**
 * Created by lenovo on 2017/5/9.
 */
const gulp=require("gulp");
const uglify=require("gulp-uglify");//js�ļ�ѹ��
const cleanCSS=require("gulp-clean-css")//css��ѹ��
const webserver=require("gulp-webserver")//web�ķ���������

/*js�ļ�*/
gulp.task('jsmin', function() {
    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'))
});
/*css�ļ�*/
gulp.task('cssmin',function(){
    gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'))
})

gulp.task('html',function(){
    gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('build/html'))
})

gulp.task('build',['jsmin','cssmin','html'])

gulp.task('webserver',['build'],function(){
    gulp.watch('src/css/*.css',['cssmin'])
    gulp.watch('src/html/**/*.html',['html'])
    gulp.src('build')
        .pipe(webserver({
            livereload:true,
            directoryListing:true,
            port:9999,
            open:'/html/first.html'
        }))
})