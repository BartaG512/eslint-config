module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"jest": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
    "no-console": "off",
		"array-bracket-spacing": "error",
		"template-curly-spacing": ["error", "never"],
		"key-spacing": ["error", { "afterColon": true, "beforeColon": false  }],

		"keyword-spacing":	 [
			"error", {"before": true}
		],
		"space-before-blocks":	 [
			"error", {"functions": "always", "keywords": "always"}
		],
		"no-trailing-spaces": "error",

		"no-new-object": "error",
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }],

		"no-param-reassign": "error",

		"newline-per-chained-call": "error",
		"prefer-arrow-callback": [
			"error",
			{ "allowNamedFunctions": true }
		],


		// "max-len": ["error", { "code": 300 }],
		"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
		"padded-blocks": ["error", "never"],
		"prefer-rest-params": "error",

		"arrow-parens": "error",
		"arrow-body-style": ["error", "always"],
		"no-restricted-globals": "error",

		"no-new-func": "error",
		"space-in-parens": "error",
		"object-curly-spacing": ["error", "always"],
		"no-loop-func": "error",
		"eol-last": "error",
		"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
		"operator-linebreak": "error",
		"no-multi-assign": "error",
		"prefer-const": "error",
		"no-array-constructor": "error",
		"block-spacing": "error",
		"dot-notation": "error",
		"no-confusing-arrow": "error",
		"no-nested-ternary": "error",
		"computed-property-spacing": "error",
		"func-call-spacing": "error",

		"no-mixed-operators": "error",
		"comma-style": "error",
		"camelcase": "error",
		// "new-cap": "error",
		// "no-underscore-dangle": "error",
		"comma-dangle": ["error", "always-multiline"],
		"id-length": ["error", { "min": 1, "max": 40, "exceptions": ["i"] }],
		"spaced-comment": "error",
		"space-before-function-paren": ["error", "never"],

		"brace-style": "error",
		"no-else-return": "error",

		"no-var": "error",
		"quote-props": ["error", "as-needed", {
			"unnecessary": true
		}],
 	  "comma-spacing": [1, {
			"before": false,
			"after": true
		}],
		"indent": [
			"error",
			"tab",
			{ "SwitchCase": 1 }
		],
		// "linebreak-style": [
		// 	// "error",
		// 	// "windows"
		// ],
		"semi": [
			"error",
			"always"
		],
		"space-infix-ops": ["error", {"int32Hint": false}]
	}
};