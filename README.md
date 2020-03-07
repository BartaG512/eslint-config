##

This repository holds eslint-plugin-logger package too it is needed to be published separately as this package eslint-config-ndpkg depend on eslint-plugin-logger.


## Install

npm install eslint-config-ndpkg --save-dev
npm install eslint --save-dev

- Create a new .eslintrc in your project root:
```js
// eslintrc.js
module.exports = {
	"extends": "ndpkg"
}
```

Versions:

* 2.1.1 Added Jest
* 1.0.2 ESLint rules