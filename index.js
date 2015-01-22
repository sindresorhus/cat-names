'use strict';
var uniqueRandomArray = require('unique-random-array');
var catNames = require('./cat-names.json');

exports.all = catNames;
exports.random = uniqueRandomArray(catNames);
