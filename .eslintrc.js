module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'plugins': ['@html-eslint'],
	'overrides': [
		{
			'files': ['*.html'],
			'parser': '@html-eslint/parser',
			'extends': ['plugin:@html-eslint/recommended'],
		},
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		// 'linebreak-style': [
		// 	'error',
		// 	'windows'
		// ],
		// 'quotes': [
		// 	'error',
		// 	'single'
		// ],
		// 'semi': [
		// 	'error',
		// 	'never'
		// ]
	}
}
