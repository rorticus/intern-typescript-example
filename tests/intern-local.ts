export * from './intern';

export const tunnel = 'SeleniumTunnel';
export const tunnelOptions = {
	hostname: 'localhost',
	port: '4444'
};

export const environments = [
	{ browserName: 'chrome' }
];

export const loaders = {
	'host-node': (<any>require).nodeRequire && (<any>require).nodeRequire.resolve('intern-systemjs-loader'),
	'host-browser': 'node_modules/intern-systemjs-loader/main.js'
};

export const loaderOptions = {
	map: {
		'tests': '_build/tests',
		'src': '_build/src',
		'angular': '/node_modules/angular/angular.js',
		'angular-mocks': '/node_modules/angular-mocks/angular-mocks.js',
		text: '/node_modules/systemjs-plugin-text/text.js'
	},

	packages: {
		'tests': {
			'defaultExtension': 'js'
		},
		'src': {
			'defaultExtension': 'js'
		}
	},

	meta: {
		pluginFirst: false,
		angular: {
			format: 'global',
			exports: 'angular'
		},
		'*.html': {
			loader: 'text'
		}
	}
};

/*
Fix for an issue with intern-systemjs-loader not working correctly in Windows
*/
declare const System: any;

export const setup = function () {
	const decanonicalize = System.decanonicalize;
	System.decanonicalize = function (name: string, id: string) {
		let done = decanonicalize.call(this, name, id);

		if (/^intern\//.test(name)) {
			done = done.replace(/^\/\w:/, '');
		}

		return done;
	};
};

export const excludeInstrumentation = true;
