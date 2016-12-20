var path = require('path');

// Karma configuration
// Generated on Mon May 16 2016 14:18:34 GMT+0800 (CST)
module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine-ajax', 'jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'./test/index.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'./test/index.js': ['webpack']
		},

		// Webpack
		webpack: {
			devtool: 'eval',
			output: {
				pathinfo: true
			},
			eslint: {
				configFile: '.eslintrc',
				emitWarning: true,
				emitError: true,
				formatter: require('eslint-friendly-formatter')
			},
			module: {
				preLoaders: [{
					test: /\.js$/,
					loader: 'eslint-loader',
					exclude: /node_modules/,
					include: [path.join(__dirname, './src')]
				}],
				loaders: [{
					test: /\.js$/,
					loaders: ['babel'],
					exclude: /node_modules/,
					include: [path.join(__dirname, './src'), path.join(__dirname, './test')]
				}],
				postLoaders: [{
					test: /\.js$/,
					loader: 'istanbul-instrumenter',
					exclude: /node_modules|_spec\.js$/,
					include: [path.join(__dirname, './src')]
				}]
			}

		},


		// Webpack middleware
		webpackMiddleware: {
			noInfo: true
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],


		// optionally, configure the reporter
		coverageReporter: {
			reporters: [
				// generates ./coverage/lcov.info
				{type: 'lcovonly', subdir: '.'},
				// generates ./coverage/coverage-final.json
				{type: 'json', subdir: '.'}
			]
		},


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],
		//browsers: ['PhantomJS', 'Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
