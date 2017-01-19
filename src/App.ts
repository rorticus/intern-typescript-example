import * as angular from 'angular';

import MainController from './MainController';

const app = angular.module('Main', []);

app.controller('MainController', [ '$scope', MainController ]);

export default app;