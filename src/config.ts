require.config({
	baseUrl: '../../',
	packages: [
		{ name: 'react', location: '../node_modules/react/dist', main: 'react' },
		{ name: 'react-dom', location: '../node_modules/react-dom/dist', main: 'react-dom' }
	]
});

require([ './src/index' ], function () {});
