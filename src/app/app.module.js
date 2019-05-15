import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import lastSearchesService from './services/lastSearches';
import openWeatherMapsService from './services/openWeatherMaps';
import startPageModule from './start-page/start-page.module';
import mainPageModule from './main-page/main-page.module';
import config from './app.division';
import lastSearches from './values/lastSearches';
import currentWeather from './values/currentWeather';
import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";

export default angular
    .module('app', [uirouter, ngMaterial, ngAnimate, ngAria, startPageModule, mainPageModule])
    .config(config)
    .factory('lastSearchesService', lastSearchesService)
    .factory('openWeatherMapsService', openWeatherMapsService)
    .value('lastSearches', lastSearches)
    .value('currentWeather', currentWeather)
    .name;