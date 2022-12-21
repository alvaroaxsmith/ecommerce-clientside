module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"plugins": ["@html-eslint"],
	"overrides": [
		{
			"files": ["*.html"],
			"parser": "@html-eslint/parser",
			"extends": ["plugin:@html-eslint/recommended"],
		},
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}
}
