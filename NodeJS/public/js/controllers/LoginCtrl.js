//public/js/controllers/LoginCtrl.js
angular.module('LoginCtrl', []).controller('LoginController', function($scope, $http, LoginService) {
  $scope.user = {
    userid: '',
    password: ''
  };
  $scope.submit = function() {
      $http.post("/api/user", $scope.user).
        success(function(data, status, headers, config) {
          LoginService.loginUser(data[0]);
          $scope.message = 'Success!' + LoginService.getUser();
          console.log(LoginService.getUser());
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
