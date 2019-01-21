var path = require('path');
var webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		components: ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', './src/index.js']
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/' // hot loader publish dir
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
};