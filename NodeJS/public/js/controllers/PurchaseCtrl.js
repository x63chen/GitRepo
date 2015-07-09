// public/js/controllers/PurchaseCtrl.js
app.controller('PurchaseCtrl', function($scope, $http, ProductService, LoginService) {
    $scope.currentProduct = ProductService.getProduct();
    $scope.quantity = 1;
    $scope.submit = function() {
    };
  });
