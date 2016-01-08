var path = require('path');
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [ 'webpack-hot-middleware/client', './src/app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
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
		extensions: ['', '.ts', '.js', '.tsx', '.html']
	},
	module: {
		loaders: [
			{test: /\.tsx?$/, loader: 'ts-loader'}
		]
	}
}
