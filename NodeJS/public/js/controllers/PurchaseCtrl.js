// public/js/controllers/PurchaseCtrl.js
app.controller('PurchaseCtrl', function($scope, $http, $location, ProductService, LoginService) {
    $scope.currentProduct = ProductService.getProduct();
    $scope.currentUser = LoginService.getUser();
    $scope.quantity = 1;
    $scope.purchase = {
      userid    : $scope.currentUser.userid,
      quantity  : 1,
      productid : $scope.currentProduct.productname,
      datepurch : new Date(),
      ownerid   : $scope.currentProduct.ownerid,
      pmttype   : 'cash',
      delivtype : 'pickup',
      comments  : '',
      paid      : false,
      pmtdate   : '',
      delivered : false,
      delivdate : ''
    };

    $scope.submitPurchase = function() {
      $scope.purchase.cost =  $scope.purchase.quantity * $scope.currentProduct.price;
      $http.post("/api/addpurchase", $scope.purchase).
        success(function(data, status, headers, config) {
          $scope.message = 'Success!';
          $location.path("/Success");
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
