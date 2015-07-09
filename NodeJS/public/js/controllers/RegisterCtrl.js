// public/js/controllers/RegisterCtrl.js
angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, $http) {

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
