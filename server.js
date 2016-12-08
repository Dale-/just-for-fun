/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

var path = require('path');
var express = require('express');
var jsonServer = require('json-mock-kuitos');
var webpack = require('webpack');
var config = require('./webpack-dev.config');

var app = jsonServer.create();
var compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
	noInfo    : false,
	stats     : {
		colors: true,
		cached: false
	},
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, 'localhost', function (err) {
// app.listen(3000, '172.19.0.238', function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:3000');
});
