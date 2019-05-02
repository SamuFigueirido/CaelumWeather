import angular from 'angular';
import appComponent from './app.component';
import uirouter from '@uirouter/angularjs';
angular.module('app', [
    uirouter
]).component('app', appComponent);