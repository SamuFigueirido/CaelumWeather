import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';

//Routes
import config from './app.routes';

//Modules
import startPageModule from './start-page/start-page.module';
import mainPageModule from './main-page/main-page.module';
import sharedModule from './shared/shared.module';

export default angular
    .module('app', [uirouter, ngMaterial, ngAnimate, ngAria, ngMessages, startPageModule, mainPageModule, sharedModule])
    .config(config)
    .name;