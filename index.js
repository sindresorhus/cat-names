'use strict';
var uniqueRandom = require('unique-random');
var catNames = require('./cat-names.json');
var catRandom = uniqueRandom(0, catNames.length - 1);

exports.all = catNames;

exports.random = function () {
	return catNames[catRandom()];
};
