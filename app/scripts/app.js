'use strict';
angular.module('split', []).filter('split', function() {
  return function(input) {
     return input.substr(0, 9)
  };
});
angular.module('clean', []).filter('clean', function() {
  return function(input) {
     return input.replace('*', '')
  };
});
angular
  .module('drjovagithubioApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'split',
    'clean',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page/:page', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
