import angular from 'angular';
import appComponent from './app.component';
import weatherService from './app.weatherService';

export default angular
    .module('app', [])
    .component('app', appComponent)
    .factory('weatherService', weatherService);