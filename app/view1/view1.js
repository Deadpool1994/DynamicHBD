'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

    $(document).ready(function(){
      console.log('logged in');
      $(".digits").countdown({
        image: "img/digits.png",
        format: "dd:hh:mm:ss",
        endTime: new Date('11/03/16 00:00:00')
      });
    });

}]);
