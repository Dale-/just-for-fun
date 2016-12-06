/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/6/16
 */

var fs = require('fs');
var express = require('express');
var router = express.Router();

fs.readdirSync('mock').forEach(function(route) {
	if (route.indexOf('index') === -1) {
		require('./' + route)(router);
	}
});

module.exports = router;
