'use strict';

const defaultFormat = '{current}/{total} ';

/**
 * Adds counter specified by format to all the questions
 * @param [questions]
 * @param [format]
 */
module.exports = (questions = [], format = defaultFormat) => {
	const context = {
		total: questions.length
	};

	questions.forEach((q, key) => {
		context.current = key + 1;

		if (typeof q.message === 'function') {
			const originalMessage = q.message;

			q.message = (...args) => {
				const msg = originalMessage(...args);

				return formatMsg(msg, context, format);
			};
		} else {
			// String
			q.message = formatMsg(q.message, context, format);
		}
	});

	return questions;
};

function formatMsg(msg, {current, total}, format) {
	const placeholder = format.replace('{current}', current).replace('{total}', total);

	return `${placeholder}${msg}`;
}
