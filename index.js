
module.exports = {
	plugins: [
		'eslint-plugin-logger',
		'eslint-plugin-jest',
		'eslint-plugin-jest-formatting',
	],
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:jest-formatting/recommended',
	],

	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		testConfig: 'readonly',
	},
	parserOptions: { ecmaVersion: 10 },
	rules: {
		'accessor-pairs': 'error',
		'array-bracket-spacing': 'error',
		'arrow-body-style': ['error', 'always'],
		'arrow-parens': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		camelcase: 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': [
			1,
			{
				after: true,
				before: false,
			},
		],
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		curly: ['error'],
		'default-case': 'error',
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: 'error',
		'func-call-spacing': 'error',
		'id-length': [
			'error',
			{
				exceptions: [
					'i',
				],
				max: 40,
				min: 1,
			},
		],
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1 },
		],
		'jest-formatting/padding-around-expect-groups': [
			'error',
		],
		'jest/consistent-test-it': [
			'error',
			{ fn: 'it' },
		],
		'jest/expect-expect': 'error',
		'jest/no-duplicate-hooks': 'error',
		'jest/no-empty-title': 'error',
		'jest/no-export': 'error',
		'jest/no-if': 'error',
		'jest/no-standalone-expect': 'error',
		'jest/no-test-return-statement': 'error',
		'jest/no-try-expect': 'error',
		'jest/prefer-to-be-null': 'error',
		'jest/prefer-to-be-undefined': 'error',
		'jest/prefer-to-contain': 'error',
		'jest/prefer-to-have-length': 'error',
		'jest/require-top-level-describe': 'error',
		'jest/require-tothrow-message': 'error',
		'jest/valid-describe': 'error',
		'jest/valid-expect': 'error',
		'key-spacing': ['error', {
			afterColon: true,
			beforeColon: false,
		}],
		'keyword-spacing': [
			'error',
			{ before: true },
		],
		'lines-between-class-members': [
			'error',
			'always',
		],
		'logger/logger-argument': 'error',
		'max-len': [
			'error',
			{ code: 150 },
		],
		'max-statements-per-line': [
			'error',
			{ max: 1 },
		],
		'newline-per-chained-call': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': 'error',
		'no-duplicate-case': 'error',
		'no-else-return': 'error',
		'no-empty-character-class': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multi-spaces': [
			'error',
		],
		'no-multi-str': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
			},
		],
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-param-reassign': 'error',
		'no-path-concat': 'error',
		'no-plusplus': [
			'error',
			{ allowForLoopAfterthoughts: true },
		],
		'no-restricted-globals': 'error',
		'no-return-assign': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-vars': [
			'error',
			{	ignoreRestSiblings: true },
		],
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [
			'error',
			'always',
		],
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'object-curly-newline': [
			'error',
			{ multiline: true },
		],
		'one-var': [
			'error',
			'never',
		],
		'operator-linebreak': 'error',
		'padded-blocks': [
			'error',
			'never',
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				next: 'class',
				prev: '*',
			},
			{
				blankLine: 'always',
				next: 'function',
				prev: 'cjs-import',
			},
			{
				blankLine: 'always',
				next: 'if',
				prev: '*',
			},
		],
		'prefer-arrow-callback': [
			'error',
			{ allowNamedFunctions: true },
		],
		'prefer-const': 'error',
		'prefer-destructuring': [
			'error',
			{
				array: false,
				object: true,
			},
			{ enforceForRenamedProperties: false },
		],
		'prefer-object-spread': 'error',
		'prefer-rest-params': 'error',
		'quote-props': [
			'error',
			'as-needed',
			{ unnecessary: true },
		],
		quotes: [
			'error',
			'single',
			{ avoidEscape: true },
		],
		radix: [
			'error',
			'as-needed',
		],
		semi: [
			'error',
			'always',
		],
		'semi-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'space-before-blocks': [
			'error',
			{
				classes: 'always',
				functions: 'always',
				keywords: 'always',
			},
		],
		'space-before-function-paren': [
			'error',
			'never',
		],
		'space-in-parens': 'error',
		'space-infix-ops': [
			'error',
			{ int32Hint: false },
		],
		'spaced-comment': 'error',
		'switch-colon-spacing': 'error',
		'template-curly-spacing': [
			'error',
			'never',
		],
		'use-isnan': 'error',
		'valid-typeof': 'error',
		yoda: [
			'error',
			'never',
			{ exceptRange: true },
		],
	},
};
