'use strict';
const uniqueRandomArray = require('unique-random-array');
const catNames = require('./cat-names.json');

exports.all = catNames;
exports.random = uniqueRandomArray(catNames);
