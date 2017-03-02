import * as angular from 'angular';

import MainController from './MainController';
import TestDirective from './TestDirective';

const app = angular.module('Main', []);

app.controller('MainController', [ '$scope', MainController ]);
app.directive('testDirective', TestDirective);

export default app;