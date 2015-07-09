// public/js/controllers/RegisterCtrl.js
angular.module('ProductCtrl', []).controller('ProductController', function($scope, $http) {

    $scope.product = {
      productname : '',
      productid : '',
      productdescription : '',
      price : '',
      effectivedate : '',
      expirydate : '',
      ownerid : '',
      paymentinstruction : '',
      image : ''
    };

    $scope.message = '';

    $scope.submit = function() {
        $http.post("http://localhost:8080/api/addproduct", $scope.product).
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
