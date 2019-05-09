import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import lastSearchesService from './app.lastSearchesService';
import openWeatherMapsService from './app.openWeatherMapsService';
import startPage from './start-page/start-page';
import lastSearches from './values/lastSearches';
import currentWeather from './values/currentWeather';
import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";

export default angular
    .module('startpage', [uirouter, ngMaterial, ngAnimate, ngAria])
    .component('startpage', startPage)
    .factory('lastSearchesService', lastSearchesService)
    .factory('openWeatherMapsService', openWeatherMapsService)
    .value('lastSearches', lastSearches)
    .value('currentWeather', currentWeather);