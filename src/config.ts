require.config(<any> {
	baseUrl: '../../',
	packages: [
	],
	shim: {
		'angular': { exports: 'angular' }
	}
});

require([ './src/index' ], function () {});
