//public/js/controllers/LoginCtrl.js
app.controller('LoginCtrl', function($scope, $http, $location, LoginService) {
  $scope.user = {
    userid: '',
    password: ''
  };
  $scope.submit = function() {
      $http.post("/api/user", $scope.user).
        success(function(data, status, headers, config) {
          LoginService.loginUser(data[0]);
          $location.path("/");
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
