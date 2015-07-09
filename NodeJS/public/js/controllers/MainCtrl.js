// public/js/controllers/MainCtrl.js
app.controller('MainCtrl', function($scope, $http, ProductService, LoginService) {

    $http.get("/api/products").
    success(function(data, status, headers, config) {
      $scope.products = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    $scope.currentUser = LoginService.userAuthenticated();

});
