var gulp = require('gulp');

/*
  Task to inject css and js files into index.html.
*/
gulp.task('inject', function() {
  var wiredep = require('wiredep').stream; // Used to inject bower packages' css and js
  var inject = require('gulp-inject'); // used to inject our own dependencies, css files and JS files

  var injectSrc = gulp.src([
    './public/css/*.css',
    './public/js/*.js',
    './src/**/*.js'], {read: false}); // We just the need the file names, not the contents. So we set read to false, which basically doesn't read the contents.

  var injectOptions = {
    //    ignorePath: '/public'
    relative: true
  };

  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib', // directory where wiredep will be looking for stuff. E.g., when it sees bootstrap in bower.json, it needs to know where to find it.
    //    ignorePath: '../../public' // we use this so that in our html,instead of ../../public/lib/file, we get /lib/file
  };

  return gulp.src('./index.html')
      .pipe(wiredep(options))
      .pipe(inject(injectSrc, injectOptions))
      .pipe(gulp.dest('./'));
});
