var path = require('path');
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [ 'webpack-hot-middleware/client', './src/app'],
    vendor: ["react", "react-dom", "react-redux", "react-router", "redux", "redux-logger", "redux-router", "redux-thunk", "rx"]
  },
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
      ENV: JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
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
