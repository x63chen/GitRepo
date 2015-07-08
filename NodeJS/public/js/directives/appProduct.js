app.directive('appProduct', function() {
  return {
      restrict: 'E',
      scope: {
          product: '='
      },
      templateUrl: 'js/directives/appProduct.html'
});
