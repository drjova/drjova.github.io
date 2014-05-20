angular.module('drjovagithubioApp')
  .controller('MainCtrl', function ($scope, $http) {
      $scope.hasNote = function(commit){
        return commit.match(/NOTE:/);
        };
        $http({method: 'GET', url: 'https://api.github.com/repos/jirikuncar/invenio/commits'}).
      success(function(data, status, headers, config) {
        $scope.commits = data;
      }).
      error(function(data, status, headers, config) {
        $scope.httperror = data;
      });
  });
