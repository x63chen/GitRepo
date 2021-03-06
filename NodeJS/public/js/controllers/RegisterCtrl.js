// public/js/controllers/RegisterCtrl.js
app.controller('RegisterCtrl', function($scope, $http, $location, LoginService) {

    $scope.user = {
      userid : '',
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      addressL1 : '',
      addressL2 : '',
      phone : '',
      comments : ''
    };

    $scope.message = '';

    $scope.submit = function() {
        $http.post("/api/register", $scope.user).
          success(function(data, status, headers, config) {
            $scope.message = 'Success!';
            $location.path("/");
            LoginService.loginUser($scope.user);
            // this callback will be called asynchronously
            // when the response is available
          }).
          error(function(data, status, headers, config) {
            $scope.message = 'Failed :(';
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
    };
    $scope.login = function() {
      LoginService.loginUser("login");
    }
  });
