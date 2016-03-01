var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = fs.readdirSync('./node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  });

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/server/index.ts'
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js',
    library: 'backend',
    libraryTarget: 'this'
  },
  externals: [
    function(context, request, callback) {
      var pathStart = request.split('/')[0];
      if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
        return callback(null, "commonjs " + request);
      };
      callback();
    }
  ],
  recordsPath: path.join(__dirname, 'build/_backend_records'),
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
    new webpack.DefinePlugin({
      __dirname: "'"+__dirname+"'"
    })
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.tsx', '.html'],
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loaders: ['ts-loader']}
    ]
  }
};
