import angular from 'angular';
import appComponent from './app.component';
import uirouter from '@uirouter/angularjs';
import helloComp from './hello/hello';
import worldComp from './world/world';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

angular.module('app', [ngMaterial, ngAnimate, ngAria]).component('app', appComponent);
const myApp = angular.module('app', [uirouter, ngMaterial, ngAnimate, ngAria])

myApp.component('hello', helloComp);
myApp.component('world', worldComp);

myApp.config(['$stateProvider', function(provider) {
    const hello = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    }

    const world = {
        name: 'world',
        url: '/world',
        component: 'world'
    }
    
    provider.state(hello);
    provider.state(world);
}]);
