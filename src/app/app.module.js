import angular from 'angular';
import appComponent from './app.component';
import uirouter from '@uirouter/angularjs';
import helloComp from './hello/hello';
import worldComp from './world/world';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import weatherService from './app.weatherService';
import config from './helloworld';

export default angular
    .module('app', [ngMaterial, ngAnimate, ngAria])
    .component('app', appComponent)
    .factory('weatherService', weatherService);
    
const myApp = angular.module('app', [uirouter, ngMaterial, ngAnimate, ngAria])

myApp.component('hello', helloComp);
myApp.component('world', worldComp);

myApp.config(config);
