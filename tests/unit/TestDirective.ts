import * as registerSuite from 'intern!object';
import { assert } from 'intern/chai';
import * as angular from 'angular';
import 'angular-mocks';
import 'src/App';

let controller: angular.IController = null;
let scope: any = null;

interface InjectedFunction {
    ($rootScope: angular.IRootScopeService, $compiler: angular.ICompileService): void;
}

function inject(fn: InjectedFunction) {
    return function () {
        angular.injector(['ng', 'ngMock', 'Main']).invoke(fn);
    };
}

let $compiler: angular.ICompileService;

registerSuite({
    name: 'MainController test',

    beforeEach: inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        $compiler = $compile;
    }),

    'test element HTML'() {
        const element = $compiler('<div test-directive></div>')(scope);
        assert.equal(element.html(), 'Hello World');
    }
});