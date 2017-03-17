import test from 'ava';
import x from './';

test(t => {
	t.true(x.all.length > 0);
	t.truthy(x.random());
	t.not(x.random(), x.random());
	t.is(x.all[0], '"Frankly, my dear, I don\'t give a damn." Gone with the Wind');
	t.is(x.all[1], '"I\'m gonna make him an offer he can\'t refuse.\" The Godfather');
});
