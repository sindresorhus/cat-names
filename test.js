import test from 'ava';
import {catNames, randomCatName} from './index.js';

test('main', t => {
	t.true(catNames.length > 0);
	t.truthy(randomCatName());
	t.not(randomCatName(), randomCatName());
	t.is(catNames[0], 'Abby');
	t.is(catNames[1], 'Angel');
});
