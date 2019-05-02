import angular from 'angular';
import appComponent from './app.component';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
angular.module('app', [
  ComponentsModule.name, ngMaterial, ngAnimate
]).component('app', appComponent);