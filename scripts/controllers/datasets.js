'use strict';

angular.module('koopApp')
  .controller('DatasetsCtrl', function( $scope, $http, $routeParams, $location, $rootScope) {
    $scope.name = $routeParams.name;
    $scope.id = $routeParams.id;
    $http.get($rootScope.host + '/providers/'+$scope.name+'/datasets').success(function (data) {
      $scope.dataset = data[$scope.id];
    });

    $scope.back = function(){
      //window.location = location.origin+'/#/providers/'+$scope.name;
      $location.path('/providers/'+$scope.name);
    };

  });
