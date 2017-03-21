import test from 'ava';
import addCounter from './index';

test('not throws if called without parameters', t => {
	t.notThrows(() => addCounter());
});

test('string message', t => {
	const q1 = {
		type: 'input',
		name: 'name',
		message: `What's your name?`
	};

	addCounter([q1]);

	t.is(q1.message, `1/1 What's your name?`);
});

test('function message', t => {
	const context = {val: 'name'};
	const q1 = {
		type: 'input',
		name: 'name',
		message: session => `What's your ${session.val}?`
	};

	addCounter([q1]);

	t.is(q1.message(context), `1/1 What's your name?`);
});

test('several messages', t => {
	const q1 = {
		type: 'input',
		name: 'name',
		message: `What's your name?`
	};

	const q2 = {
		type: 'input',
		name: 'name',
		message: `What's your email?`
	};

	addCounter([q1, q2]);

	t.is(q1.message, `1/2 What's your name?`);
	t.is(q2.message, `2/2 What's your email?`);
});

test('custom format', t => {
	const q1 = {
		type: 'input',
		name: 'name',
		message: `What's your name?`
	};
	const format = '{current} from {total}, ';

	addCounter([q1], format);

	t.is(q1.message, `1 from 1, What's your name?`);
});

test.skip(`don't change message of question which is not asked`, t => {
	const q1 = {
		type: 'input',
		name: 'name',
		message: `What's your name?`,
		when: false
	};

	const q2 = {
		type: 'input',
		name: 'name',
		message: `What's your nickname?`,
		when: () => false
	};

	const q3 = {
		type: 'input',
		name: 'name',
		message: `What's your email?`,
	};

	addCounter([q1, q2, q3]);

	t.is(q1.message, `What's your name?`);
	t.is(q2.message, `What's your nickname?`);
	t.is(q3.message, `1/1 What's your email?`);
});
