var path = require('path');
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [ 
    'webpack-hot-middleware/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server', 
    './src/app'
  ],
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
    }),
    new WebpackNotifierPlugin()
  ],
	resolve: {
		extensions: ['', '.ts', '.js', '.tsx', '.html'],
    alias: {
      inversify: "inversify/source/inversify.ts"
    }
	},
	module: {
		loaders: [
			{test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader']}
		]
	}
}
