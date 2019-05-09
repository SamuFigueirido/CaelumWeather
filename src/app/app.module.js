import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import lastSearchesService from './app.lastSearchesService';
import startPage from './start-page/start-page';
import lastSearches from './app.lastSearches';
import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";

export default angular
    .module('startpage', [uirouter, ngMaterial, ngAnimate, ngAria])
    .component('startpage', startPage)
    .factory('lastSearchesService', lastSearchesService)
    .value('lastSearches', lastSearches);