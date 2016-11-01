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
    var birthday = new Date(dob);
    var current_date = new Date();
    var diff = current_date - birthday;
    if(diff > 0 && diff < 86400000){
      happyBirthday();
    }
    $(".digits").countdown({
      image: "img/digits.png",
      format: "ddd:hh:mm:ss",
      endTime: new Date(dob),
      timerEnd: function(){happyBirthday();}
    });
  });

  var happyBirthday =  function(){
    window.location.href = "/#/happybirthday";
 };
 $('.wrapper .hidden-button').on('click',function(){
   happyBirthday();
 });


}]);
