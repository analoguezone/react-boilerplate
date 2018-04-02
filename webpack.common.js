const path = require('path'),
	HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : {
		app : [
			'./src/App.jsx'
		]
	},
	resolve : {
		enforceExtension : false,
		extensions       : ['.js', '.jsx'],
		mainFiles        : ['index']
	},
	output : {
		path          : path.join(__dirname, './out/'),
		filename      : '[name].js',
		chunkFilename : '[id].bundle.js',
		publicPath    : '/'
	},
	module : {
		rules : [
			{
				test    : /\.jsx$/,
				exclude : /(node_modules)/,
				loader  : 'babel-loader',
				options : {
					presets : ['env', 'react']
				}
			}
		]
	},
	plugins : [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
	]
};
