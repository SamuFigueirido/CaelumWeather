import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import weatherService from './app.weatherService';
import startPage from './start-page/start-page';
import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";

export default angular
    .module('startpage', [uirouter, ngMaterial, ngAnimate, ngAria])
    .component('startpage', startPage)
    .factory('weatherService', weatherService);