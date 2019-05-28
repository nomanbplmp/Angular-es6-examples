
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';

import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from '../features/home';
import login from '../features/login';

let moduleName = 'app'

angular.module(moduleName,[uirouter,home,login]).config(routing);

angular.element(document).ready(function() {
	angular.bootstrap(document, [moduleName]);
});