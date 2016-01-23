var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

var handleFatalError = function(fatalErrors) {
  console.log("Fatal errors", fatalErrors);
}

var handleSoftErrors = function(softErrors) {
  console.log("Soft errors", softErrors);
}

var handleWarnings = function(warnings) {
  console.log("warnings", warnings);
}

var successfullyCompiled = function() {
  delete require.cache[require.resolve('./static/server.entry.js')]
  require('./static/server.entry.js');
}

compiler.watch({}, (err, stats) => {
  if(err)
    return handleFatalError(err);
  var jsonStats = stats.toJson();
  if(jsonStats.errors.length > 0)
    return handleSoftErrors(jsonStats.errors);
  if(jsonStats.warnings.length > 0)
    handleWarnings(jsonStats.warnings);
  successfullyCompiled();
})