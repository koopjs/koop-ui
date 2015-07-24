'use strict';

angular.module('koopApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, providers, $rootScope) {

    //alert(JSON.stringify($routeParams));
    //console.log($http);

    $scope.selected = $routeParams.name;// || 'about';

    //if (!$scope.providers) {
    //  $http.get('/providers').success(function(data){
    //    $scope.providers = data;
    //  });
    //}
    if (!$rootScope.providers) {
      providers.getProviders().success(function(data){
        $scope.providers = data;
        $rootScope.providers = data;
      });
    }

    $scope.select = function(name){
      $scope.selected = name; //$scope.providers[i];
    };

    //select(datalist)
    $scope.isActive = function(name) {
      return $scope.selected === name;
    };

  });
