angular.module('starter.controllers', [])

.controller('StreamsCtrl', function($scope, Streams) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.streams = Streams.all();
})

.controller('StreamDetailCtrl', function($scope, $stateParams, Streams) {
  $scope.stream = Streams.get($stateParams.streamId);
})

.controller('CameraCtrl', function($scope, $stateParams, Streams) {

});
