// npm i --save-dev gulp gulp-uglify gulp-sass gulp-babel gulp-plumber gulp-concat babel-core gulp-tap gulp-file 

const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	tap = require('gulp-tap'),
	newfile = require('gulp-file');


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

// const contentAppJs = `
// 	new Vue({
// 		el: '${store}-app'
// 	})
// `;

// // caso for uma implantação da estrutura do vue
// gulp.task('structure:vue', function () {
// 	return gulp.src('./vue')
// 		.pipe(tap(function (file) {
// 			console.log(file)
// 			const fileName = "App.js"

// 			return newfile(fileName, contentAppJs)
// 				.pipe(gulp.dest('vue'))
// 		}))
// })


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