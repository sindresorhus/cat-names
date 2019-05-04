import catNamesJson = require('./cat-names.json');

declare const catNames: {
	/**
	Top 100 cat names in alphabetical order.

	@example
	```
	import catNames = require('cat-names');

	catNames.all;
	//=> ['Abby', 'Angel', …]
	```
	*/
	readonly all: Readonly<typeof catNamesJson>;

	/**
	Random cat name.

	@example
	```
	import catNames = require('cat-names');

	catNames.random();
	//=> 'Max'
	```
	*/
	random(): string;
};

export = catNames;
