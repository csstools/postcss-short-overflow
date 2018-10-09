module.exports = {
	'postcss-short-overflow': {
		'basic': {
			message: 'supports basic usage'
		},
		'prefix': {
			message: 'supports prefix usage'
		},
		'prefix:opt': {
			message: 'supports { prefix: "x" } prefix usage',
			options: {
				prefix: 'x'
			},
			expect: 'basic.expect.css',
			expect: 'basic.result.css'
		}
	}
};
