/**
 * @fileoverview Enforce using only object in logger seconds argument
 * @author
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: 'Enforce using only object in logger seconds argument',
			category: 'Fill me in',
			recommended: false,
		},
		fixable: null, // or "code" or "whitespace"
		schema: [
			// fill in your schema
		],
	},

	create: function(context) {
		return {
			CallExpression: function(node) {
				const { callee } = node;
				const logLevels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];

				if (callee.object) {
				}

				if (callee.object && callee.object.name === 'logger' && callee.property && logLevels.includes(callee.property.name)) {
					if (node.arguments[1] && node.arguments[1].type !== 'ObjectExpression') {
						context.report(node, 'Incorrect logger call. Second argument should be an object');
					}
				}

				if (
					callee.object &&
					callee.object.type === 'MemberExpression' &&
					callee.object.property &&
					callee.object.property.name === 'logger' &&
					callee.property &&
					logLevels.includes(callee.property.name)
				) {
					if (node.arguments[1] && node.arguments[1].type !== 'ObjectExpression') {
						context.report(node, 'Incorrect logger call. Second argument should be an object');
					}
				}
			},
		};
	},
};
