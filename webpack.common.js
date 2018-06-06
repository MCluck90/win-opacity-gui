const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	target: 'electron-renderer',
	entry: {
		'client': path.resolve(__dirname, 'src/main.jsx')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
	]
};