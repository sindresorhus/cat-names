#!/usr/bin/env node
'use strict';
cont meow = require('meow');
cont catNames = require('./');

let cli = meow([
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
]);

console.log(cli.flags.all ? catNames.all.join('\n') : catNames.random());
