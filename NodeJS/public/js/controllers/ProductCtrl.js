// public/js/controllers/RegisterCtrl.js
app.controller('ProductCtrl', function($scope, $http, $location, LoginService) {
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
  };
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
    $scope.product = {
      productname : '',
      productdescription : '',
      price : '',
      effectivedate : new Date(),
      expirydate : new Date(),
      ownerid : LoginService.getUser().userid,
      paymentinstruction : '',
      image : ''
    };

    $scope.message = '';
    $scope.submit = function() {
        $http.post("/api/addproduct", $scope.product).
          success(function(data, status, headers, config) {
            $scope.message = 'Success!';
            $location.path("/");
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
