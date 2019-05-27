
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';

import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from '../features/home';

let app = angular.module('app',[uirouter,home]);
console.log('adding routing')
app.config(routing);