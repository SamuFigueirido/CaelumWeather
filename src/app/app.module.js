import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import weatherService from './app.weatherService';

export default angular
    .module('app', [uirouter, ngMaterial, ngAnimate, ngAria])
    .factory('weatherService', weatherService);
