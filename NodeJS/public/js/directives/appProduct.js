app.directive('appProduct', function(ProductService, $location) {
  return {
      scope: {
          info: '='
      },
      templateUrl: '/js/directives/appProduct.html',
      link: function(scope, element, attrs) {
        scope.buttonText = 'Purchase',
        scope.purchase = function(currObj) {
          ProductService.addProduct(currObj);
          $location.path('/ConfirmPurchase');
        }
      }
    };
});
