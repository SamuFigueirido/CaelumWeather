import "material-icons/iconfont/material-icons.scss";
import "angular-material/angular-material.scss";
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';

//Angular Translate
import ngTranslate from 'angular-translate';
import translations from './app.translate';

//UI-Router
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';

//Modules
import startPageModule from './start-page/start-page.module';
import mainPageModule from './main-page/main-page.module';
import sharedModule from './shared/shared.module';

//Redux
import ngRedux from 'ng-redux';
import redux from './app.redux';

export default angular
    .module('app', [uiRouter, ngRedux, ngMaterial, ngAnimate, ngAria, ngMessages, ngTranslate, startPageModule, mainPageModule, sharedModule])
    .config(translations)
    .config(routes)
    .config(redux)
    .name;