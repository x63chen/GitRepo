//public/js/controllers/LoginCtrl.js
angular.module('LoginCtrl', []).controller('LoginController', function($scope, $http) {
  $scope.user = {
    userid: '',
    password: ''
  };
  $scope.submit = function() {
      $http.post("http://localhost:8080/api/user", $scope.user).
        success(function(data, status, headers, config) {
          $scope.message = 'Success!' + JSON.stringify(data);
          console.log(data[0]);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          $scope.message = 'Failed';
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  };
});
