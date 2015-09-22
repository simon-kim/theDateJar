angular.module('dateJarApp')
  .controller('mainCtrl', function ($scope) {

    $scope.data = {
      "atHome": [
        "Home1",
        "Home2",
        "Home3"
      ],
      "outside": [
        "outside1",
        "outside2",
        "outside3"
      ],
      "free": [
        "free1",
        "free2",
        "free3"
      ],
      "pricey": [
        "pricey1",
        "pricey2",
        "pricey3"
      ],
      "couple": [
        "couple1",
        "couple2",
        "couple3"
      ]
    };

    $scope.dataJesus = {
      "jesus": [
        "Home1",
        "Home2",
        "Home3",
        "outside1",
        "outside2",
        "outside3",
        "free1",
        "free2",
        "free3",
        "pricey1",
        "pricey2",
        "pricey3",
        "couple1",
        "couple2",
        "couple3"
      ]
    };

    $scope.datePicked = '';

    $scope.chooseRandom = function(array) {
      return Math.floor(Math.random() * array.length);
    };

    $scope.atHome = function () {
      $scope.datePicked = data.atHome[$scope.chooseRandom(data.atHome)];
    };

    $scope.outside = function () {
      $scope.datePicked = data.outside[$scope.chooseRandom(data.outside)];
    };

    $scope.free = function () {
      $scope.datePicked = data.free[$scope.chooseRandom(data.free)];
    };

    $scope.pricey = function () {
      $scope.datePicked = data.pricey[$scope.chooseRandom(data.pricey)];
    };

    $scope.couple = function () {
      $scope.datePicked = data.couple[$scope.chooseRandom(data.couple)];
    };

    $scope.jesus = function () {
      $scope.datePicked = dataJesus.jesus[$scope.chooseRandom(dataJesus.jesus)];
    };
});