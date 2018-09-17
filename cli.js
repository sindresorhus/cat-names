#!/usr/bin/env node
'use strict';
const meow = require('meow');
const catNames = require('.');

const cli = meow(`
	Examples
	  $ cat-names
	  Max

	  $ cat-names --all
	  Abby
	  Angel
	  …

	Options
	  --all  Get all names instead of a random name
`);

console.log(cli.flags.all ? catNames.all.join('\n') : catNames.random());
