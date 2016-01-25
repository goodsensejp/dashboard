var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var DeepMerge = require('deep-merge');
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var Express = require('express');
var frontendConfig = require('./webpack.frontend.js');
var backendConfig = require('./webpack.backend.js');
var enableDestroy = require('server-destroy');

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

function createHotReloadMiddlewares() {
  var compiler = webpack(frontendConfig);

  return [
    webpackDevMiddleware(compiler, { 
      noInfo: true, 
      publicPath: frontendConfig.output.publicPath }),
    webpackHotMiddleware(compiler)
  ];
}

function watchBackend(middlewares, done) {
  var httpServer = null;

  webpack(backendConfig).watch(1000, function(err, stats) {
    if(!httpServer) {
      httpServer = requireServer(middlewares);
      done();
    } else {
      httpServer.destroy(function() {
        httpServer = requireServer(middlewares);
        console.log("Server destroyed");
      });
    }
  });
}

function cleanRequire(path) {
  delete require.cache[require.resolve(path)]
  return require(path);
}

function requireServer(middlewares) {
  var server  = cleanRequire('./build/backend').backend.default(middlewares);
  enableDestroy(server);
  return server;
}

gulp.task('frontend-build', function(done) {
  webpack(frontendConfig).run(onBuild(done));
});

gulp.task('frontend-watch', function(done) {
  webpack(frontendConfig).watch(onBuild(done));
});

gulp.task('backend-build', function(done) {
  webpack(backendConfig).run(onBuild(done));
});

/**
 * Only serve the backend
 */
gulp.task('serve:backend', function(done) {
  watchBackend([], done);
});

/**
 * Serve with frontend hot reloading
 */
gulp.task('serve', function(done) {
  watchBackend(createHotReloadMiddlewares(), done);
});

/**
 * Serve without hot reloading
 */
gulp.task('serve:freeze', ['frontend-watch', 'serve:backend']);

gulp.task('build', ['frontend-build', 'backend-build']);
