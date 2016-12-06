var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    // configuration
	devtool: 'source-map',
	entry: {
		app: ['webpack-hot-middleware/client?reload=true', './src/app.js'],
		libs: ['angular', 'angular-resource']
	},
	output: {
		path: __dirname + '/build',
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	resolve: {
		// 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		extensions: ['', '.js']
	},
	plugins: [
		new HTMLPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	eslint: {
		configFile: '.eslintrc',
		emitWarning: true,
		emitError: true,
		formatter: require('eslint-friendly-formatter')
	},
	// loader
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				include: __dirname + 'src'
			}
		],
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname + '/src'
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				includes: [__dirname + '/src', __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css']
			},
			{
				test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
				loader: 'url?prefix=font/&limit=10000'
			}
		]
	}
};
