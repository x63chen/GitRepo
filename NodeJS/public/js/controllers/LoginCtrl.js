//public/js/controllers/LoginCtrl.js
angular.module('LoginCtrl', []).controller('LoginController', function($scope, $http) {
  $scope.userID = '';
  $scope.password = '';
  $scope.submit = function() {
      $http.post("http://localhost:8080/api/user", {userid:$scope.userID}).
        success(function(data, status, headers, config) {
          $scope.message = 'Success!' + data;
          console.log(data);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          $scope.message = 'Failed :(';
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  };
});
