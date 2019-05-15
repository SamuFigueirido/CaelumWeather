//Angular
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

//UI-Router and routes
import uirouter from '@uirouter/angularjs';
import config from './app.division';

//Services
import lastSearchesService from './services/lastSearches';
import openWeatherMapsService from './services/openWeatherMaps';

//Modules
import startPageModule from './start-page/start-page.module';
import mainPageModule from './main-page/main-page.module';

//Values
import lastSearches from './values/lastSearches';
import currentWeather from './values/currentWeather';

//External libraries
import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";

//Components
import logoLetters from './components/logo-letters/logo-letters';
import inputButton from './components/search-input-button/search-input-button';
import listCities from './components/list-cities/list-cities';

export default angular
    .module('app', [uirouter, ngMaterial, ngAnimate, ngAria, startPageModule, mainPageModule])
    .config(config)
    .factory('lastSearchesService', lastSearchesService)
    .factory('openWeatherMapsService', openWeatherMapsService)
    .value('lastSearches', lastSearches)
    .value('currentWeather', currentWeather)
    .component('logoLetters', logoLetters)
    .component('inputButton', inputButton)
    .component('listCities', listCities)
    .name;