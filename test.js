'use strict';
var test = require('ava');
var catNames = require('./');

test(function (t) {
	t.assert(catNames.all.length > 0);
	t.assert(catNames.random());
	t.assert(catNames.random() !== catNames.random());
	t.assert(catNames.all[0] === 'Abby');
	t.assert(catNames.all[1] === 'Angel');
	t.end();
});
