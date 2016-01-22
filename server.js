const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const Hapi = require('hapi')

const server = new Hapi.Server();

const port = 3000;

server.connection({ port });

const compiler = webpack(config)
server.register(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
server.register(webpackHotMiddleware(compiler))

server.register(function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

server.start(() => {
  console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
})
