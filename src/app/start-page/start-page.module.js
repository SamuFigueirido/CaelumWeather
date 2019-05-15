import angular from 'angular';
import startPage from './start-page';

export default angular
    .module('appStartPage', [])
    .component('startPage', startPage)
    .name;