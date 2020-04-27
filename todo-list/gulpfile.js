const gulp = require('gulp'); // Init all plugins
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
// eslint-disable-next-line camelcase
const ext_replace = require('gulp-ext-replace');
const autoprefixer = require('gulp-autoprefixer');
const gsmq = require('gulp-group-css-media-queries');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

// compile our less
function styles() {
  return gulp
    .src('app/less/style.less')
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      }),
    )
    .pipe(less())
    .pipe(gsmq())
    .pipe(
      autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true,
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

// less minify
function stylesMinify() {
  return gulp
    .src('app/less/style.less')
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      }),
    )
    .pipe(less())
    .pipe(
      autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true,
      }),
    )
    .pipe(gsmq())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

// compile es6 to es5 with babel and minify
function es6() {
  return gulp
    .src('app/js/common.es6.js')
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      }),
    )
    .pipe(
      babel({
        presets: ['es2015'],
      }),
    )
    .pipe(ext_replace('.js', '.es6.js'))
    .pipe(rename({ suffix: '.es5' }))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
}

// images optimization
async function imgOptimization() {
  await imagemin(['app/img/src/*.{jpg,png}'], {
    destination: 'app/img/dist',
    plugins: [imageminJpegtran(), imageminPngquant()],
  }).then(() => {
    browserSync.reload();
  });
}

// watch for changings

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'app',
      index: 'index.html',
    },
    notify: false,
  });
  gulp.watch('app/less/**/*.less', styles);
  gulp.watch('app/less/**/*.less', stylesMinify);
  gulp.watch('app/js/common.es6.js', es6);
  gulp.watch('app/img/src/*.{jpg,png}', imgOptimization);
  gulp.watch(['app/*.html', 'app/js/**/*.js']).on('change', browserSync.reload);
};

// Watch task
gulp.task('watch', watchFiles);

// delete our old production folder

function clean() {
  return del(['dist/*']);
}

/* build production */

function buildProject(done) {
  gulp
    .src(['app/css/style.css', 'app/css/style.min.css'])
    .pipe(gulp.dest('dist/css'));

  gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));

  gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));

  gulp.src(['app/img/**/*', '!app/img/src/*']).pipe(gulp.dest('dist/img'));

  gulp.src('app/*.php').pipe(gulp.dest('dist'));

  gulp.src('app/*.html').pipe(gulp.dest('dist'));

  gulp.src('app/libs/**').pipe(gulp.dest('dist/libs/'));
  done();
}

gulp.task(
  'build',
  gulp.series(clean, styles, stylesMinify, es6, imgOptimization, buildProject),
);

/* dev task */

gulp.task('dev', gulp.series('build', 'watch'));
