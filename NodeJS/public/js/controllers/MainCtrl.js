// public/js/controllers/MainCtrl.js
app.controller('MainCtrl', function($scope, $http, ProductService, LoginService) {
    $scope.currentUser = LoginService.getUser();
    $scope.loggedIn = LoginService.isLoggingIn();
    $scope.authenticated = LoginService.userAuthenticated();
    $http.get("/api/products").
    success(function(data, status, headers, config) {
      $scope.products = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    $scope.$watch(function () { return LoginService.userAuthenticated() }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.authenticated = LoginService.userAuthenticated();
      }
    });

    $scope.$watch(function () { return LoginService.getUser() }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.currentUser = LoginService.getUser();
      }
    });
});
