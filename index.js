'use strict';
var uniqueRandomArray = require('unique-random-array');
var movieQuotes = require('./movie-quotes.json');

exports.all = movieQuotes;
exports.random = uniqueRandomArray(movieQuotes);
