require.config({
	baseUrl: '../../',
	packages: [
		{ name: 'react', location: '../node_modules/react/dist', main: 'react' },
		{ name: 'react-dom', location: '../node_modules/react-dom/dist', main: 'react-dom' },
		{ name: 'redux', location: '../node_modules/redux/dist', main: 'redux' },
		{ name: 'react-redux', location: '../node_modules/react-redux/dist', main: 'react-redux' }
	]
});

require([ './src/index' ], function () {});
