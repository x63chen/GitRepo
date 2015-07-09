// public/js/controllers/RegisterCtrl.js
app.controller('PurchaseHistoryCtrl', function($scope, $http, $location, LoginService) {
    $scope.user = {userid: LoginService.getUser().userid};
    $scope.myPurchases = {};
    $scope.mySales = {};
    $http.post("/api/myPurchases", $scope.user).
      success(function(data, status, headers, config) {
        console.log(data);
        if(data.length != 0) {
          $scope.myPurchases = data;
        } else {
          console.log("Login Failed. Please check if your username and password are correct.");
        }
        // this callback will be called asynchronously
        // when the response is available
      }).
      error(function(data, status, headers, config) {
        console.log('Failed to get myPurchases');
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

      $http.post("/api/mySales", {ownerid: LoginService.getUser().userid}).
        success(function(data, status, headers, config) {
          console.log(data);
          if(data.length != 0) {
            $scope.mySales = data;
          } else {
            console.log("Login Failed. Please check if your username and password are correct.");
          }
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          console.log('Failed to get myPurchases');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  });
