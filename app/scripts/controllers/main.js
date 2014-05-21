angular.module('drjovagithubioApp')
  .controller('MainCtrl', function ($scope, $http) {
       $scope.hasNote = function(commit){
        return commit.match(/NOTE:/);
      };
      $http({method: 'GET', url: 'http://127.0.0.1:8000/scripts/commits.json'}).
      success(function(data, status, headers, config) {
        clean_data = []
        angular.forEach(data, function(commit){
            message = commit.commit.message;
            if(message.match(/\* NOTE/)){
                messages = message.match(/\* NOTE(|:) ((.*)(|\s{1,}) (.*)){1,}/igm)
                title    = message.match(/^(.*)(|\s{1,}) (.*)/ig)
                commit.commit.note = messages;
                commit.commit.title = title[0];
                clean_data.push(commit)
                console.log(message)
            }
        })

        $scope.commits = clean_data;
      }).
      error(function(data, status, headers, config) {
        $scope.httperror = data;
      });
  });
