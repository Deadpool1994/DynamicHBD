'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', '$location',function($scope,$http,$location) {

  var happyBirthday =  function(){
    console.log('getting the time');
    window.location.href = "/#!/view2";

  console.log('gone');
 };
    $(document).ready(function(){
      console.log('logged in');
      $(".digits").countdown({
        image: "img/digits.png",
        format: "dd:hh:mm:ss",
        endTime: new Date('2016-11-03 00:00:00'),
        timerEnd: function(){happyBirthday();}
      });
    });

}]);
