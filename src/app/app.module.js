import angular from 'angular';
import appComponent from './app.component';
import uirouter from '@uirouter/angularjs';
import helloComp from './hello/hello';
import worldComp from './world/world';
const myApp = angular.module('app', [uirouter]).component('app', appComponent);

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