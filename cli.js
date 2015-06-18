#!/usr/bin/env node
'use strict';
var meow = require('meow');
var catNames = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ cat-names',
		'  Max',
		'',
		'  $ cat-names --all',
		'  Abby',
		'  Angel',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name'
	]
});

console.log(cli.flags.all ? catNames.all.join('\n') : catNames.random());
