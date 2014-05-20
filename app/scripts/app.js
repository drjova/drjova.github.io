'use strict';
angular.module('hasNote', []).filter('note', function() {
  return function(input) {
     return input.match(/NOTE/);
  };
});
angular
  .module('drjovagithubioApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'hasNote'
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
