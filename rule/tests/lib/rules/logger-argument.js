/**
 * @fileoverview Enforce using object in gd-node-logger seconds argument
 * @author
 */
"use strict";

const rule = require("../../../lib/rules/logger-argument");

const { RuleTester } = require("eslint");
const ruleTester = new RuleTester();
ruleTester.run("logger-argument", rule, {

	valid: [
		{
			code: "this.logger.info('Message', { prop: 'hello' });",
		},
		{
			code: "this.logger.info('Message');",
		},
	],

	invalid: [
		{
			code: "this.logger.info('Message', 'Hello')",
			errors: [{
				message: "Incorrect logger call. Second argument should be an object",
				type: "CallExpression",
			}],
		},
		{
			code: "logger.info('hello', ['1']);",
			errors: [{
				message: "Incorrect logger call. Second argument should be an object",
				type: "CallExpression",
			}],
		},
	],
});
