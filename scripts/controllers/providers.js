'use strict';

angular.module('koopApp')
  .controller( 'ProvidersCtrl', function( $scope, $http, $routeParams, $location, $rootScope ) {
    $scope.name = $routeParams.name;
    $scope.routes = Object.keys( $rootScope.providers[$scope.name].routes );
    $http.get($rootScope.host + '/providers/'+$scope.name+'/datasets').success(function(data){
      $scope.datasets = data;
    });

    $scope.selectRow = function(index){
      $scope.selected = $scope.datasets[index];
      var id = $scope.selected.id
        .replace('::', ':')
        .replace(/:\/|:info/g,'')
        .replace($scope.name+':','')
        .split(':');
      $scope.url = [location.origin, $scope.name.toLowerCase(), id[0], id[1]].join('/');

      $location.path('/providers/'+$scope.name+'/'+index);
    };

    $scope.selectTab = function(id){
      var tab = '#'+id+'Tab', pane = '#'+id;
      $('.tab').removeClass('active');
      $('.tab-pane').removeClass('active');
      $(tab).addClass('active');
      $(pane).addClass('active');
    };

    $scope.add = function(){
      var $btn = $('#'+$scope.name+'-add').button('loading');
      var path = $('#'+$scope.name+'-new').val();
      $http.get($rootScope.host + '/'+path).success(function(){
        $http.get($rootScope.host + '/providers/'+$scope.name+'/datasets').success(function(data){
          $btn.button('reset');
          $('#'+$scope.name+'-new').val('');
          $scope.datasets = data;
        });
      });
    };
  });
