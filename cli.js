#!/usr/bin/env node
'use strict';
var meow = require('meow');
var movieQuotes = require('./');

var cli = meow([
	'Examples',
	'  $ movie-quotes',
	'  "Show me the money!" Jerry Maguire',
	'',
	'  $ movie-quotes --all',
	'  "Frankly, my dear, I don\'t give a damn." Gone with the Wind',
    '  "I\'m gonna make him an offer he can\'t refuse." The Godfather',
	'  ...',
	'',
	'Options',
	'  --all   Get all quotes instead of a random quote'
]);

console.log(cli.flags.all ? movieQuotes.all.join('\n') : movieQuotes.random());
