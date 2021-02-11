const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades para JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

//Funcion que compila SASS
const paths = {
    imagenes: 'src/img/**/*',
    js: 'src/js/**/*.js'
}

function css( ){
    return src('src/scss/app.scss')
        .pipe( sourcemaps.init() ) // Crea el archivo para saber cual hay que modificar en el archivo original no minificado
        .pipe( sass())
        .pipe( postcss([autoprefixer(), cssnano()]) ) // cssnano compacta el codido para performance
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css'))
}

function watchArchivo(){
    watch('src/scss/**/*.scss', css)  // * solo busca los archivos que esten en el mismo nivel **/* busca todos los archivos
    watch( paths.js, javascript)
}

function imagenes(){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe( notify({ mesage: 'Imagen Minificada'}) )
}

function javascript(){
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe( concat('bundle.js'))
        .pipe( terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({suffix: '.min'}))
        .pipe( dest('./build/js'))
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({mesage: 'Version Webp'}))
}

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivo = watchArchivo;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivo );