/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

var os = require('os');
var path = require('path');
var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ASSETS_PATH = /src\/assets/;

module.exports = {
	env: 'development',
	devtool: 'source-map',
	entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', './src/app/index.js'],
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/' // hot loader publish dir
	},
	plugins: [
		new HTMLPlugin({
			template: './src/index.html',
			filename: './index.html',
			inject: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js']
	},
	eslint: {
		//configFile: '.eslintrc',
		emitWarning: true,
		emitError: true,
		formatter: require('eslint-friendly-formatter')
	},
	postcss: [autoprefixer({browsers: ['Chrome > 35', 'Firefox > 30', 'Safari > 7']})],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: [/node_modules/, ASSETS_PATH],
				include: [path.join(__dirname, 'src')]
			}
		],

		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				exclude: [/(node_modules|bower_components)/, ASSETS_PATH],
				include: [path.join(__dirname, 'src')]
			},
			{
				test: /\.tpl\.html$/,
				loader: 'html',
				query: {interpolate: true},
				exclude: /(node_modules|bower_components)/,
				include: path.join(__dirname, 'src/components')
			},

			{
				test: /.html$/,
				loader: 'file?name=[path][name]-[hash:8].[ext]',
				exclude: /(node_modules|bower_components)/,
				include: path.join(__dirname, 'src/app')
			},
			{
				test: /\.(sc|c)ss$/,
				loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass?sourceMap'],
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash:8].[ext]'
				]
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts'
			},
			{
				test: /\.svg(#\w+)?$/,
				loader: 'url?limit=15000&mimetype=image/svg+xml&prefix=fonts'
			}

		]
	}
};
