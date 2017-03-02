import * as registerSuite from 'intern!object';
import { assert } from 'intern/chai';
import * as angular from 'angular';
import 'angular-mocks';
import 'src/App';

let controller: angular.IController = null;
let scope: any = null;

interface InjectedFunction {
	($controller: angular.IControllerService, $rootScope: angular.IRootScopeService): void;
}

function inject(fn: InjectedFunction) {
	return function () {
		angular.injector([ 'ng', 'ngMock', 'Main' ]).invoke(fn);
	};
}

registerSuite({
	name: 'MainController test',

	beforeEach: inject(($controller, $rootScope) => {
		scope = $rootScope.$new();
		controller = $controller('MainController', { '$scope': scope });
	}),

	'test initialization'() {
		assert.equal(scope.x, 0);
		assert.equal(scope.y, 0);
		assert.equal(scope.z, 0);

		assert.isFunction(scope.sum);
	},

	'test addition'() {
		scope.x = 1;
		scope.y = 1;
		scope.sum();

		assert.equal(scope.z, 2);
	}
});