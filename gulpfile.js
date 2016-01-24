var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var DeepMerge = require('deep-merge');
var nodemon = require('nodemon');

var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

// var Hapi = require('hapi')
// var hapiServer = new Hapi.Server();



var frontendConfig = require('./webpack.frontend.js');
var backendConfig = require('./webpack.backend.js');

// var deepmerge = DeepMerge(function(target, source, key) {
//   if(target instanceof Array) {
//     return [].concat(target, source);
//   }
//   return source;
// });

// generic

// var defaultConfig = {
//   module: {
//     loaders: [
//       {test: /\.js$/, exclude: /node_modules/, loaders: ['monkey-hot', 'babel'] },
//     ]
//   }
// };

// if(process.env.NODE_ENV !== 'production') {
//   //defaultConfig.devtool = '#eval-source-map';
//   defaultConfig.devtool = 'source-map';
//   defaultConfig.debug = true;
// }

// function config(overrides) {
//   return deepmerge(defaultConfig, overrides || {});
// }


// tasks

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('frontend-build', function(done) {
  webpack(frontendConfig).run(onBuild(done));
});



gulp.task('frontend-watch', function() {
  //webpack(frontendConfig).watch(100, onBuild());

  var compiler = webpack(frontendConfig);
  app.register(webpackDevMiddleware(compiler, { noInfo: true, publicPath: frontendConfig.output.publicPath }))
  app.register(webpackHotMiddleware(compiler))

});

gulp.task('backend-build', function(done) {
  webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend-watch', function(done) {
  var firedDone = false;
  webpack(backendConfig).watch(1000, function(err, stats) {
    if(!firedDone) {
      firedDone = true;
      done();
    }

   requireServer();
    //nodemon.restart();
  });
});

var requireServer = () => {
  var backendPath = path.join(__dirname, 'build/backend.js');

  delete require.cache[require.resolve(backendPath)]

  var backend = require(backendPath).backend;

  backend.default(app);
}

gulp.task('test', function() {
  requireServer();
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['frontend-watch', 'backend-watch']);

gulp.task('run', ['backend-watch', 'frontend-watch'], function() {


/*  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Patched!');
  });*/
});
