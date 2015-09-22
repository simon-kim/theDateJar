angular.module('dateJarApp')
  .controller('mainCtrl', function ($scope, mainService) {

    $scope.data = mainService.getData();

    $scope.dataJesus = mainService.getAllData();

    $scope.datePicked = '';

    $scope.chooseRandom = function(array) {
      return Math.floor(Math.random() * array.length);
    };

    $scope.atHome = function () {
      $scope.datePicked = $scope.data.atHome[$scope.chooseRandom($scope.data.atHome)];
    };

    $scope.outside = function () {
      $scope.datePicked = $scope.data.outside[$scope.chooseRandom($scope.data.outside)];
    };

    $scope.free = function () {
      $scope.datePicked = $scope.data.free[$scope.chooseRandom($scope.data.free)];
    };

    $scope.pricey = function () {
      $scope.datePicked = $scope.data.pricey[$scope.chooseRandom($scope.data.pricey)];
    };

    $scope.couple = function () {
      $scope.datePicked = $scope.data.couple[$scope.chooseRandom($scope.data.couple)];
    };

    $scope.jesus = function () {
      $scope.datePicked = $scope.dataJesus.jesus[$scope.chooseRandom($scope.dataJesus.jesus)];
    };
});