var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/app'
    ],
    server: './server/server'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].entry.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
	resolve: {
		extensions: ['', '.ts', '.js', '.tsx', '.html'],
	},
	module: {
		loaders: [
			{test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader']}
		]
	}
}
