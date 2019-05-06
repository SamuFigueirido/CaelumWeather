import angular from 'angular';
import appComponent from './app.component';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import weatherService from './app.weatherService';

export default angular
    .module('app', [ngMaterial, ngAnimate, ngAria])
    .component('app', appComponent)
    .factory('weatherService', weatherService);
