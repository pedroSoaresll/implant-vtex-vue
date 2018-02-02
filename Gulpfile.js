// npm i --save-dev gulp gulp-uglify gulp-sass gulp-babel gulp-plumber gulp-concat babel-core babel-preset-es2015

const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat');


const store = 'mude-o-nome-da-loja-';
const pathBuildFiles = 'gbuild';

// files vendor
const listFilesVendor = [
	'./vendor/vue.min.js',
	'./vendor/vuex.js'
];

const listFilesComponents = [
	'./vue/components/**/*.js',
	'./vue/App.js'
];


gulp.task('vue:components', function () {
	return gulp.src(listFilesComponents)
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
	return gulp.src(listFilesVendor)
		.pipe(plumber())
		.pipe(concat(store + 'vendor-app.min.js'))
		.pipe(gulp.dest(pathBuildFiles))
});


// declarada como default - ok
gulp.task('default', ['vendor:js', 'vue:components']);

// declarada como watch - ok
gulp.task('watch', function () {
	gulp.watch('./vue/**/*.js', ['vue:components'])
});