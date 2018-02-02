// npm i --save-dev gulp gulp-uglify gulp-sass gulp-babel gulp-plumber gulp-concat babel-core babel-preset-es2015 gulp-sass

const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat');


const store = 'mude-o-nome-da-loja-';
const pathBuildFiles = 'gbuild/';

// files vendor
const listFilesVendor = [
	'./vendor/vue.min.js',
	'./vendor/vuex.js'
];

// files vue components
const listFilesComponents = [
	'./vue/components/**/*.js',
	'./vue/App.js'
];

// files scss
const listFilesScss = [
	'./sass/main.scss',
	'./sass/example1/mainExample1.scss'
];


gulp.task('vue:components', function () {
	gulp.src(listFilesComponents)
		.pipe(plumber())
		.pipe(concat(store + 'components-app.min.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest(pathBuildFiles))
});


// vendor
gulp.task('vendor:js', function () {
	gulp.src(listFilesVendor)
		.pipe(plumber())
		.pipe(concat(store + 'vendor-app.min.js'))
		.pipe(gulp.dest(pathBuildFiles))
});


// sass
gulp.task('css:sass', function () {
	gulp.src(listFilesScss)
		.pipe(sass().on('error', console.log))
		.pipe(gulp.dest(pathBuildFiles))
});


// declarada como default - ok
gulp.task('default', ['vendor:js', 'vue:components', 'css:sass']);

// declarada como watch - ok
gulp.task('watch', function () {
	gulp.watch('./vue/**/*.js', ['vue:components'])
});