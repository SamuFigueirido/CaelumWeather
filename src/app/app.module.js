import angular from 'angular';
import appComponent from './app.component';
import ngMaterial from 'angular-material';
angular.module('app', [
  ComponentsModule.name, ngMaterial
]).component('app', appComponent);