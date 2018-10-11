//1.引入gulp对象
var gulp = require("gulp");
//拷贝html文件
gulp.task("copy-html",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
//拷贝图片
gulp.task("images",function(){
	return gulp.src("images/*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})
/*使用gulp-sass-china 编译scss文件
	gulp-minify-css
	gulp-rename
*/

const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

//公共样式scss
gulp.task("basescss",function(){
	return gulp.src("base.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("_base.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("scss",function(){
	return gulp.src("index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//拷贝js文件
gulp.task("js",function(){
	return gulp.src(["*.js","!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
/*拷贝数据*/


//建立工程的任务
gulp.task("build",["copy-html","scss","images","basescss","js"],function(){
	console.log("编译成功");
})

//编写监听
gulp.task("watch",function(){
	gulp.watch(["index.scss"],['scss']);
	gulp.watch(["images/*.{jpg,png}"],['images']);
	gulp.watch(["*.html"],['copy-html']);
	gulp.watch(["base.scss"],["basescss"]);
	gulp.watch(["*.js","!gulpfile.js"],['js']);
})
//gulp-connect 启动服务

const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:'dist',
		port:8888,
		livereload:true
	})
})

//启动默认任务
gulp.task("default",['watch',"server"]);