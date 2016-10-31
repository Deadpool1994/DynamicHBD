'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http', '$location',function($http,$location) {
var dob;

  $http.get('json/birthday.json').success(function(data){
    dob = data.dob;
    $(".digits").countdown({
      image: "img/digits.png",
      format: "dd:hh:mm:ss",
      endTime: new Date(dob),
      timerEnd: function(){happyBirthday();}
    });
  });

  var happyBirthday =  function(){
    window.location.href = "/#!/view2";
 };
 $('.wrapper .hidden-button').on('click',function(){
   happyBirthday();
 });
}]);
