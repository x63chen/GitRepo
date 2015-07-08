// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

    $http.get("http://localhost:8080/api/products").
    success(function(data, status, headers, config) {
      $scope.products = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});
