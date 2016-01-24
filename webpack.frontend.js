var path = require('path');
var webpack = require('webpack')

module.exports = {
  // devtool: 'source-map',
  entry: [
    'webpack/hot/signal.js',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'frontend.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
  recordsPath: path.join(__dirname, 'build/_frontend_records'),
  resolve: {
    extensions: ['', '.ts', '.js', '.tsx', '.html'],
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader']}
    ]
  }
}
