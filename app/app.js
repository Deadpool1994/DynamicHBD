'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.dashboard',
  'myApp.login'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.when('/happybirthday',{
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/dashboard',{
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .when('/login',{
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })
  .otherwise({redirectTo: '/view1'});
}]);
