'use strict';

// the koop instance to use (need a way to dynamically set this)
var host = 'http://localhost:1337';

/**
 * @ngdoc overview
 * @name koopApp
 * @description
 * # koopApp: a UI for inspecting koop instances, providers, and datasets
 *
 * Main module of the application.
 */
var app = angular
  .module('koopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .factory('providers', function($http) {
    return {
      getProviders: function(){
        return $http.get(host + '/providers');
      }
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/providers/:name', {
        templateUrl: 'views/providers.html',
        controller: 'ProvidersCtrl'
      })
      .when('/providers/:name/:id', {
        templateUrl: 'views/datasets.html',
        controller: 'DatasetsCtrl'
      });
      //.otherwise({
      //  redirectTo: '/'
      //});
  })
  .run(function($rootScope) {
    $rootScope.host = host;
  });
