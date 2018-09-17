import test from 'ava';
import catNames from '.';

test('main', t => {
	t.true(catNames.all.length > 0);
	t.truthy(catNames.random());
	t.not(catNames.random(), catNames.random());
	t.is(catNames.all[0], 'Abby');
	t.is(catNames.all[1], 'Angel');
});
