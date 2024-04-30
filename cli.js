#!/usr/bin/env node
import meow from 'meow';
import {catNames, randomCatName} from './index.js';

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
`, {
	importMeta: import.meta,
});

console.log(cli.flags.all ? catNames.join('\n') : randomCatName());
