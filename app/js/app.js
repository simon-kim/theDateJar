var app = angular.module('dateJarApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/templates/home.html',
    controller: 'mainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);