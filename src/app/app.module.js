import angular from 'angular';
import appComponent from './app.component';
// angular.module('app', []).component('app', appComponent);

    const myApp = angular.module('app', []);
    myApp.controller('weatherCtrl', function($scope) {
        const scope = $scope;
    });