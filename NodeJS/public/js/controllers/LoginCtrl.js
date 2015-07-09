//public/js/controllers/LoginCtrl.js
app.controller('LoginCtrl', function($scope, $http, $location, LoginService) {
  $scope.user = {
    userid: '',
    password: ''
  };
  $scope.message = "";
  $scope.submit = function() {
      $http.post("/api/user", $scope.user).
        success(function(data, status, headers, config) {
          console.log(data);
          if(data.length != 0) {
            LoginService.loginUser(data[0]);
            $location.path("/");
          } else {
            $scope.message = "Login Failed. Please check if your username and password are correct."
          }
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          $scope.message = 'Failed';
          LoginService.loginUser({});
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  };
});
