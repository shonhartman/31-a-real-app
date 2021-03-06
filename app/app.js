import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';
import ngmap from 'ngmap';

import user from './modules/user';
import location from './modules/location';

let App = angular.module('app', [
  'ui.router',
  'firebase',
  'ngMap',
  
  'tiy.location',
  'tiy.user'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
